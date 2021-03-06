'use strict';

export default {
  install: (Vue, config = { appName: 'app' }) => {
    const appName = config.appName;

    const Storage = {
      setUser (user) {
        this.set('user', user);
      },

      getUser () {
        return this.get('user');
      },

      existUser () {
        return this.exist('user');
      },

      removeUser () {
        this.remove('user');
      },

      // window.LocalStorage
      set (key, value) {
        window.localStorage.setItem(appName + '_' + key, JSON.stringify(value));
      },

      get (key) {
        let data = window.localStorage.getItem(appName + '_' + key);
        try {
          return JSON.parse(data);
        } catch (Exception) {
          return data;
        }
      },

      remove (key) {
        window.localStorage.removeItem(appName + '_' + key);
      },

      destroy (key) {
        this.remove(key);
      },

      exist (key) {
        let value = window.localStorage.getItem(appName + '_' + key);
        return typeof value !== 'undefined' && value !== 'undefined' && value !== undefined && value !== null && value !== 'null' && value !== '[]';
      },

      // window.SessionStorage
      setSession (key, value) {
        window.sessionStorage.setItem(appName + '_' + key, JSON.stringify(value));
      },

      getSession (key) {
        return JSON.parse(window.sessionStorage.getItem(appName + '_' + key));
      },

      removeSession (key) {
        window.sessionStorage.removeItem(appName + '_' + key);
      },

      existSession (key) {
        let value = window.sessionStorage.getItem(appName + '_' + key);
        return typeof value !== 'undefined' && value !== 'undefined' && value !== undefined && value !== null && value !== 'null' && value !== '[]';
      },

      // Flash Data
      getFlash (key) {
        if (this.exist(key)) {
          let value = this.get(key);
          this.remove(key);
          return value;
        }
        return false;
      },

      flash (key) {
        this.getFlash(key);
      },

      removeAll () {
        window.localStorage.clear();
      }

    };

    Vue.prototype.$storage = Storage;
  }
};
