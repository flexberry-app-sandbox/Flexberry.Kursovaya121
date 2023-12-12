import { Serializer as РасторжДоговораSerializer } from
  '../mixins/regenerated/serializers/i-i-s-kursovaya12-расторж-договора';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РасторжДоговораSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
