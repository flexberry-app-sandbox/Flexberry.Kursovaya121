package Kursovaya12.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kursovaya12.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.List;

/**
 * Entity implementation class for Entity: РасчетОстВрем
 */
@Entity(name = "IISKursovaya12РасчетОстВрем")
@Table(schema = "public", name = "РасчетОстВрем")
public class RaschetOstVrem {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Использовано")
    private Integer использовано;

    @Column(name = "Доступно")
    private Integer доступно;

    @OneToMany(mappedBy = "raschetostvrem", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<OkazKonsult> okazkonsults;


    public RaschetOstVrem() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getИспользовано() {
      return использовано;
    }

    public void setИспользовано(Integer использовано) {
      this.использовано = использовано;
    }

    public Integer getДоступно() {
      return доступно;
    }

    public void setДоступно(Integer доступно) {
      this.доступно = доступно;
    }


}