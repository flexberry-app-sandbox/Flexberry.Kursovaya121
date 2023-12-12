import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursovaya12.caption'),
          title: i18n.t('forms.application.sitemap.kursovaya12.title'),
          children: [{
            link: 'i-i-s-kursovaya12-дир-отд-по-раб-с-кл-l',
            caption: i18n.t('forms.application.sitemap.kursovaya12.i-i-s-kursovaya12-дир-отд-по-раб-с-кл-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya12.i-i-s-kursovaya12-дир-отд-по-раб-с-кл-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-kursovaya12-расчет-ост-врем-l',
            caption: i18n.t('forms.application.sitemap.kursovaya12.i-i-s-kursovaya12-расчет-ост-врем-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya12.i-i-s-kursovaya12-расчет-ост-врем-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-kursovaya12-заключ-договора-l',
            caption: i18n.t('forms.application.sitemap.kursovaya12.i-i-s-kursovaya12-заключ-договора-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya12.i-i-s-kursovaya12-заключ-договора-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-kursovaya12-клиент-l',
            caption: i18n.t('forms.application.sitemap.kursovaya12.i-i-s-kursovaya12-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya12.i-i-s-kursovaya12-клиент-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-kursovaya12-расторж-договора-l',
            caption: i18n.t('forms.application.sitemap.kursovaya12.i-i-s-kursovaya12-расторж-договора-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya12.i-i-s-kursovaya12-расторж-договора-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }
      ]
    };
  }),
})