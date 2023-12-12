import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISKursovaya12ДирОтдПоРабСКлLForm from './forms/i-i-s-kursovaya12-дир-отд-по-раб-с-кл-l';
import IISKursovaya12ЗаключДоговораLForm from './forms/i-i-s-kursovaya12-заключ-договора-l';
import IISKursovaya12КлиентLForm from './forms/i-i-s-kursovaya12-клиент-l';
import IISKursovaya12РасторжДоговораLForm from './forms/i-i-s-kursovaya12-расторж-договора-l';
import IISKursovaya12РасчетОстВремLForm from './forms/i-i-s-kursovaya12-расчет-ост-врем-l';
import IISKursovaya12ДирОтдПоРабСКлEForm from './forms/i-i-s-kursovaya12-дир-отд-по-раб-с-кл-e';
import IISKursovaya12ЗаключДоговораEForm from './forms/i-i-s-kursovaya12-заключ-договора-e';
import IISKursovaya12КлиентEForm from './forms/i-i-s-kursovaya12-клиент-e';
import IISKursovaya12РасторжДоговораEForm from './forms/i-i-s-kursovaya12-расторж-договора-e';
import IISKursovaya12РасчетОстВремEForm from './forms/i-i-s-kursovaya12-расчет-ост-врем-e';
import IISKursovaya12ДирОтдПоРабСКлModel from './models/i-i-s-kursovaya12-дир-отд-по-раб-с-кл';
import IISKursovaya12ЗаключДоговораModel from './models/i-i-s-kursovaya12-заключ-договора';
import IISKursovaya12КлиентModel from './models/i-i-s-kursovaya12-клиент';
import IISKursovaya12ОказКонсультModel from './models/i-i-s-kursovaya12-оказ-консульт';
import IISKursovaya12РасторжДоговораModel from './models/i-i-s-kursovaya12-расторж-договора';
import IISKursovaya12РасчетОстВремModel from './models/i-i-s-kursovaya12-расчет-ост-врем';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya12-дир-отд-по-раб-с-кл': IISKursovaya12ДирОтдПоРабСКлModel,
    'i-i-s-kursovaya12-заключ-договора': IISKursovaya12ЗаключДоговораModel,
    'i-i-s-kursovaya12-клиент': IISKursovaya12КлиентModel,
    'i-i-s-kursovaya12-оказ-консульт': IISKursovaya12ОказКонсультModel,
    'i-i-s-kursovaya12-расторж-договора': IISKursovaya12РасторжДоговораModel,
    'i-i-s-kursovaya12-расчет-ост-врем': IISKursovaya12РасчетОстВремModel
  },

  'application-name': 'Kursovaya12',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kursovaya12',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya12',
          title: 'Kursovaya12'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        kursovaya12: {
          caption: 'Kursovaya12',
          title: 'Kursovaya12',
          'i-i-s-kursovaya12-дир-отд-по-раб-с-кл-l': {
            caption: 'Дир отд по раб с кл',
            title: ''
          },
          'i-i-s-kursovaya12-расчет-ост-врем-l': {
            caption: 'Расчет ост врем',
            title: ''
          },
          'i-i-s-kursovaya12-заключ-договора-l': {
            caption: 'Заключ договора',
            title: ''
          },
          'i-i-s-kursovaya12-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-kursovaya12-расторж-договора-l': {
            caption: 'Расторж договора',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-kursovaya12-дир-отд-по-раб-с-кл-l': IISKursovaya12ДирОтдПоРабСКлLForm,
    'i-i-s-kursovaya12-заключ-договора-l': IISKursovaya12ЗаключДоговораLForm,
    'i-i-s-kursovaya12-клиент-l': IISKursovaya12КлиентLForm,
    'i-i-s-kursovaya12-расторж-договора-l': IISKursovaya12РасторжДоговораLForm,
    'i-i-s-kursovaya12-расчет-ост-врем-l': IISKursovaya12РасчетОстВремLForm,
    'i-i-s-kursovaya12-дир-отд-по-раб-с-кл-e': IISKursovaya12ДирОтдПоРабСКлEForm,
    'i-i-s-kursovaya12-заключ-договора-e': IISKursovaya12ЗаключДоговораEForm,
    'i-i-s-kursovaya12-клиент-e': IISKursovaya12КлиентEForm,
    'i-i-s-kursovaya12-расторж-договора-e': IISKursovaya12РасторжДоговораEForm,
    'i-i-s-kursovaya12-расчет-ост-врем-e': IISKursovaya12РасчетОстВремEForm
  },

});

export default translations;
