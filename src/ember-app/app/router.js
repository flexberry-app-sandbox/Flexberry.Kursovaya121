import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya12-дир-отд-по-раб-с-кл-l');
  this.route('i-i-s-kursovaya12-дир-отд-по-раб-с-кл-e',
  { path: 'i-i-s-kursovaya12-дир-отд-по-раб-с-кл-e/:id' });
  this.route('i-i-s-kursovaya12-дир-отд-по-раб-с-кл-e.new',
  { path: 'i-i-s-kursovaya12-дир-отд-по-раб-с-кл-e/new' });
  this.route('i-i-s-kursovaya12-заключ-договора-l');
  this.route('i-i-s-kursovaya12-заключ-договора-e',
  { path: 'i-i-s-kursovaya12-заключ-договора-e/:id' });
  this.route('i-i-s-kursovaya12-заключ-договора-e.new',
  { path: 'i-i-s-kursovaya12-заключ-договора-e/new' });
  this.route('i-i-s-kursovaya12-клиент-l');
  this.route('i-i-s-kursovaya12-клиент-e',
  { path: 'i-i-s-kursovaya12-клиент-e/:id' });
  this.route('i-i-s-kursovaya12-клиент-e.new',
  { path: 'i-i-s-kursovaya12-клиент-e/new' });
  this.route('i-i-s-kursovaya12-расторж-договора-l');
  this.route('i-i-s-kursovaya12-расторж-договора-e',
  { path: 'i-i-s-kursovaya12-расторж-договора-e/:id' });
  this.route('i-i-s-kursovaya12-расторж-договора-e.new',
  { path: 'i-i-s-kursovaya12-расторж-договора-e/new' });
  this.route('i-i-s-kursovaya12-расчет-ост-врем-l');
  this.route('i-i-s-kursovaya12-расчет-ост-врем-e',
  { path: 'i-i-s-kursovaya12-расчет-ост-врем-e/:id' });
  this.route('i-i-s-kursovaya12-расчет-ост-врем-e.new',
  { path: 'i-i-s-kursovaya12-расчет-ост-врем-e/new' });
});

export default Router;
