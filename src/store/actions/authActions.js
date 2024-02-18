import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT,
    GET_USER_DETAILS,
    UPDATE_USER_DETAILS,
    GET_USER_CARDS,
    GET_IS_ADMIN,
    GET_USER_SUBSCRIPTION_DATA,
    SET_LIVE_ENABLED,
    GET_USER_GIVING_CARDS,
    SET_IS_PAYMENT_DONE,
  } from './types';
  import { axiosInstance1, axiosInstanceAuth } from '../../constant/Auth';
  import * as APIs from '../../constant/APIs';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import { store } from '../store';
  import { Platform } from 'react-native';
  import deviceInfoModule, { getDeviceId, getManufacturer, getUniqueId, } from 'react-native-device-info';
  import { getPurchasedItems } from './purchasedItemsAction';
  import { DEVICE_TYPES } from '../../constant/StringConstant';
  
  
  
  //deviceLoginInfo user details-
  export const savingDeviceLoginInfo = (token) => {
    return async (dispatch) => {
      let appVersion = deviceInfoModule.getVersion();
      const deviceId = await getUniqueId();
      const man = await getManufacturer();
      const axiosConfig = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const body = {
        "appVersion": appVersion,
        "deviceId": deviceId,
        "deviceModel": man,
        "deviceOS": Platform.OS == 'android' ? 'ANDROID' : 'IOS',
        "deviceType": Platform.OS == 'android' ? 'MOBILE_ANDROID' : 'MOBILE_IOS'
      }
  
      // console.log('data sent>', body);
      try {
        const res = await axiosInstance1.post(`${APIs.deviceLogin}`, body, axiosConfig)
        let data = res.data.data;
        console.log('res on saving last login detail>', data)
      } catch (err) {
        console.log('error while aving last login detail> ', err)
      }
    }
  }
  
  
  //Login User--
  export const loginUser = (email, password) => {
    const orgId = store.getState().activeOrgReducer.orgId;
    return async (dispatch) => {
      try {
        const tokenValue = await AsyncStorage.getItem('@push_notification_token');
  
        const config = {
          header: {
            'Content-Type': 'application/json',
          },
        };
        const username = email.trim().toLowerCase();
        const body = {
          deviceToken: tokenValue,
          username,
          password,
          deviceType: Platform.OS == 'android' ? DEVICE_TYPES.MOBILE_ANDROID : DEVICE_TYPES.MOBILE_IOS
        };
  
        const res = await axiosInstanceAuth.post(
          `${APIs.userLoginApi}?organizationId=${orgId}`,
          body,
          config
        );
        let data = res.data.data;
  
        // console.log('res is on auth action login >>>>>>', data);
        await dispatch({ type: SET_LIVE_ENABLED, payload: data?.userDetails?.organization?.liveStreamEnabled });
        await dispatch(savingDeviceLoginInfo(data.token));
        await dispatch(getUserAdditionalDetails(data?.userDetails?.id));
        await dispatch(getPurchasedItems(data.token));
        await dispatch({
          type: LOGIN_SUCCESS,
          payload: data,
        });
        savingUserDetails(data?.userDetails?.id);
  
      } catch (err) {
        dispatch({ type: LOGIN_FAILED, payload: err.response.data.message });
        console.log('error is on actions---', err.response.data);
      }
    };
  };
  
  //logout User--
  export const logoutUser = (token) => {
    return async (dispatch) => {
      try {
        const deviceToken = await AsyncStorage.getItem('@push_notification_token');
        const axiosConfig = {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };
        const res = await axiosInstanceAuth
          .get(`${APIs.logoutAPI}?deviceToken=${deviceToken}`, axiosConfig)
        // console.log('res is on auth action logout >>>>>>', res);
        if (res.status == 200) {
          dispatch({ type: LOGOUT })
          getAllGroups();
        }
      }
      catch (err) {
        console.log('error while loggin out >>>', err);
      }
    }
  };
  
  //CALLED TO SUBSCRIBE GENERAL GROUP AFTER LOGOUT--
  const getAllGroups = async () => {
    try {
      const deviceToken = await AsyncStorage.getItem(
        '@push_notification_token'
      );
      const deviceID = await getUniqueId();
      const res = await axiosInstance1.get(
        `${APIs.notificationWithout}?organizationId=${orgId}&token=${deviceToken}`
      );
  
      let allGroups = res.data.data;
      // console.log('general group is ----', allGroups[0])
      allGroups.forEach(async (item) => {
        if (item.name == 'General') {
          const data = {
            deviceType:
              Platform.OS == 'android' ? 'MOBILE_ANDROID' : 'MOBILE_IOS',
            groupId: item.id,
            organizationId: orgId,
            subscribe: true,
            tokens: deviceToken,
            deviceUniqueKey: deviceID,
          };
          let res = await axiosInstance1.post(`${APIs.subscribe}`, data);
          // console.log('res while subscribing general ', res)
        }
      });
    } catch (err) {
      // console.log('error in subscribing to general group', err);
    }
  };
  
  export const getUserDetails = (token, userId) => {
    return async (dispatch) => {
      // console.log('api called to get contatc info')
      const axiosConfig = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const res = await axiosInstance1.get(`${APIs.contact}/${userId}`, axiosConfig)
        let data = res.data.data;
        // console.log('res on gettng user details>>', res)
        dispatch({ type: GET_USER_DETAILS, payload: data })
        dispatch({ type: SET_IS_PAYMENT_DONE, payload: data?.isPaymentDone })
        dispatch({ type: SET_LIVE_ENABLED, payload: data.liveStreamEnabled });
        dispatch(getCards(token))
        dispatch({ type: GET_USER_SUBSCRIPTION_DATA, payload: { id: data.subscriptionPlanId, name: data.subscriptionPlanName, duration: data.subscriptionPlanDuration } })
      } catch (err) {
        console.log('error while getting user details in auth action')
      }
    }
  }
  
  export const updateUserDetails = (userData, token, userId) => {
    return async (dispatch) => {
  
      let axiosConfig = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + `${token}`,
        },
      };
  
      const data = {
        ...userData
      };
  
      try {
        const res = await axiosInstance1.put(`${APIs.contact}/${userId}`, data, axiosConfig);
        // console.log('res>> user details', res)
        const data2 = res.data.data
        dispatch({ type: UPDATE_USER_DETAILS, payload: data2 })
        dispatch({ type: GET_USER_SUBSCRIPTION_DATA, payload: { id: data2.subscriptionPlanId, name: data2.subscriptionPlanName, duration: data2.subscriptionPlanDuration } })
  
      } catch (err) {
        console.log('error updating contact', err.response)
      }
    }
  }
  
  //GETTING ADDITION USER _DETAILS __
  export const getUserAdditionalDetails = (userId) => {
    return async (dispatch) => {
      try {
        const res = await axiosInstance1.get(`${APIs.user}${userId}`);
        // console.log('res user addition data>>', res)
        if (res.data.data.roles[0].name == 'ROLE_ORGANIZATION_ADMIN') {
          dispatch({ type: GET_IS_ADMIN, payload: true })
        }
      }
      catch (err) {
        console.log('error while getting additional user detsils >', err.response)
      }
    }
  }
  
  //sending useDevice and Account details for puhs notification when successFully loggedIN-------
  const savingUserDetails = async (id) => {
    let notificationToken = await AsyncStorage.getItem(
      '@push_notification_token'
    );
    let deviceId = await getUniqueId();
  
    try {
      let axiosConfig = {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      };
      let data = {
        deviceToken: `${notificationToken}`,
        deviceType: Platform.OS == 'android' ? 'MOBILE_ANDROID' : 'MOBILE_IOS',
        userId: id,
        deviceUniqueKey: deviceId,
      };
  
      const res = await axiosInstance1.post(
        `${APIs.pushNotificationDeviceDetails}`,
        data,
        axiosConfig
      );
      // console.log('Device data saved :', res.config.data);
    } catch (err) {
      console.log('error while saving data :', err);
    }
  };
  
  //TO GET ALL THE CARDS OF THE USER--
  export const getCards = (token) => {
    return async (dispatch) => {
      dispatch(getNonGivingCards(token));
      dispatch(getGivingCards(token));
    }
  }
  
  export const getNonGivingCards = (token) => {
    return async (dispatch) => {
      const axiosConfig = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const res = await axiosInstance1.get(`${APIs.allCards}?givingCard=false`, axiosConfig);
        let array1 = [];
        let array2 = [];
        // console.log('got cards>>', res)
        let cardDetails = res.data.data.cardDetails;
        cardDetails?.cards?.map((item) => {
          if (item.autoPayment == true && item.selectForPayment == true) {
            array1.push(item)
          } else {
            array2.push(item)
          }
        })
        dispatch({ type: GET_USER_CARDS, payload: [...array1, ...array2] })
      }
      catch (err) {
        console.log('Error whiele getting cards details ', err.response)
  
      }
      // await getGivingCards();
  
    }
  }
  
  export const getGivingCards = (token) => {
    return async (dispatch) => {
      const axiosConfig = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const res = await axiosInstance1.get(`${APIs.allCards}?givingCard=true`, axiosConfig);
        // console.log('got giving cards>>', res)
        let cardDetails = res.data.data.cardDetails;
        cardDetails.cards.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate))
        // console.log(' cardDetails.cards.sort(compare)', cardDetails.cards);
  
        dispatch({ type: GET_USER_GIVING_CARDS, payload: cardDetails?.cards })
      }
      catch (err) {
        console.log('Error whiele getting cards details ', err.response)
  
      }
      // await getGivingCards();
  
    }
  }
  
  