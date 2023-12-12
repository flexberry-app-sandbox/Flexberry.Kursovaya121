import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  доступно: DS.attr('number'),
  использовано: DS.attr('number'),
  оказКонсульт: DS.hasMany('i-i-s-kursovaya12-оказ-консульт', { inverse: 'расчетОстВрем', async: false })
});

export let ValidationRules = {
  доступно: {
    descriptionKey: 'models.i-i-s-kursovaya12-расчет-ост-врем.validations.доступно.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  использовано: {
    descriptionKey: 'models.i-i-s-kursovaya12-расчет-ост-врем.validations.использовано.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  оказКонсульт: {
    descriptionKey: 'models.i-i-s-kursovaya12-расчет-ост-врем.validations.оказКонсульт.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РасчетОстВремE', 'i-i-s-kursovaya12-расчет-ост-врем', {
    использовано: attr('Использовано', { index: 0 }),
    доступно: attr('Доступно', { index: 1 }),
    оказКонсульт: hasMany('i-i-s-kursovaya12-оказ-консульт', 'Оказ консульт', {
      дата: attr('Дата', { index: 0 }),
      времяКонсульт: attr('Время консульт', { index: 1 }),
      предостУслуга: attr('Предост услуга', { index: 2 })
    })
  });

  modelClass.defineProjection('РасчетОстВремL', 'i-i-s-kursovaya12-расчет-ост-врем', {
    использовано: attr('Использовано', { index: 0 }),
    доступно: attr('Доступно', { index: 1 })
  });
};
