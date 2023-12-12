import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяКонсульт: DS.attr('number'),
  дата: DS.attr('date'),
  предостУслуга: DS.attr('i-i-s-kursovaya12-услуга'),
  заключДоговора: DS.belongsTo('i-i-s-kursovaya12-заключ-договора', { inverse: null, async: false }),
  расчетОстВрем: DS.belongsTo('i-i-s-kursovaya12-расчет-ост-врем', { inverse: 'оказКонсульт', async: false })
});

export let ValidationRules = {
  времяКонсульт: {
    descriptionKey: 'models.i-i-s-kursovaya12-оказ-консульт.validations.времяКонсульт.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-kursovaya12-оказ-консульт.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  предостУслуга: {
    descriptionKey: 'models.i-i-s-kursovaya12-оказ-консульт.validations.предостУслуга.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  заключДоговора: {
    descriptionKey: 'models.i-i-s-kursovaya12-оказ-консульт.validations.заключДоговора.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  расчетОстВрем: {
    descriptionKey: 'models.i-i-s-kursovaya12-оказ-консульт.validations.расчетОстВрем.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОказКонсультE', 'i-i-s-kursovaya12-оказ-консульт', {
    дата: attr('Дата', { index: 0 }),
    времяКонсульт: attr('Время консульт', { index: 1 }),
    предостУслуга: attr('Предост услуга', { index: 2 })
  });
};
