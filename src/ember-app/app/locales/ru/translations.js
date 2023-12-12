import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kursovaya12',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya12',
          title: 'Kursovaya12'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
