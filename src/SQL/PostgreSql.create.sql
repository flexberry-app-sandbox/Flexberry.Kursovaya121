




CREATE TABLE ДирОтдПоРабСКл (
 primaryKey UUID NOT NULL,
 idДиректора VARCHAR(255) NULL,
 Фамилия VARCHAR(255) NULL,
 Имя VARCHAR(255) NULL,
 Отчество VARCHAR(255) NULL,
 НомерТел VARCHAR(255) NULL,
 СерияПаспорта VARCHAR(255) NULL,
 НомерПаспорта VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ОказКонсульт (
 primaryKey UUID NOT NULL,
 Дата TIMESTAMP(3) NULL,
 ВремяКонсульт INT NULL,
 ПредостУслуга VARCHAR(11) NULL,
 ЗаключДоговора UUID NOT NULL,
 РасчетОстВрем UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE РасчетОстВрем (
 primaryKey UUID NOT NULL,
 Использовано INT NULL,
 Доступно INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ЗаключДоговора (
 primaryKey UUID NOT NULL,
 Дата TIMESTAMP(3) NULL,
 Номер INT NULL,
 Тип VARCHAR(13) NULL,
 Стоимость INT NULL,
 Клиент UUID NOT NULL,
 ДирОтдПоРабСКл UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Клиент (
 primaryKey UUID NOT NULL,
 idКлиента INT NULL,
 Фамилия VARCHAR(255) NULL,
 Имя VARCHAR(255) NULL,
 Отчество VARCHAR(255) NULL,
 НомерТелефона VARCHAR(255) NULL,
 НаимОрганицации VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE РасторжДоговора (
 primaryKey UUID NOT NULL,
 Дата TIMESTAMP(3) NULL,
 Номер INT NULL,
 Клиент UUID NOT NULL,
 ДирОтдПоРабСКл UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE ОказКонсульт ADD CONSTRAINT FK331e9a13ce1cc9b2797d93d87dad2553cac46cd6 FOREIGN KEY (ЗаключДоговора) REFERENCES ЗаключДоговора; 
CREATE INDEX Index331e9a13ce1cc9b2797d93d87dad2553cac46cd6 on ОказКонсульт (ЗаключДоговора); 

 ALTER TABLE ОказКонсульт ADD CONSTRAINT FK06276d1a238a4a16aedaab72d8588ac4dead1970 FOREIGN KEY (РасчетОстВрем) REFERENCES РасчетОстВрем; 
CREATE INDEX Index06276d1a238a4a16aedaab72d8588ac4dead1970 on ОказКонсульт (РасчетОстВрем); 

 ALTER TABLE ЗаключДоговора ADD CONSTRAINT FK0f73a6dfa84ae4afd5c25384a9eea0ec95848357 FOREIGN KEY (Клиент) REFERENCES Клиент; 
CREATE INDEX Index0f73a6dfa84ae4afd5c25384a9eea0ec95848357 on ЗаключДоговора (Клиент); 

 ALTER TABLE ЗаключДоговора ADD CONSTRAINT FKbf3819daae1f514291720b99fe7e24e2e8daa0d8 FOREIGN KEY (ДирОтдПоРабСКл) REFERENCES ДирОтдПоРабСКл; 
CREATE INDEX Indexbf3819daae1f514291720b99fe7e24e2e8daa0d8 on ЗаключДоговора (ДирОтдПоРабСКл); 

 ALTER TABLE РасторжДоговора ADD CONSTRAINT FKff6d2ee8952c5ceadfe0312b98b3464204d61cdf FOREIGN KEY (Клиент) REFERENCES Клиент; 
CREATE INDEX Indexff6d2ee8952c5ceadfe0312b98b3464204d61cdf on РасторжДоговора (Клиент); 

 ALTER TABLE РасторжДоговора ADD CONSTRAINT FK21331f1fabbedc04e6e50113acfd91d6bacf52c8 FOREIGN KEY (ДирОтдПоРабСКл) REFERENCES ДирОтдПоРабСКл; 
CREATE INDEX Index21331f1fabbedc04e6e50113acfd91d6bacf52c8 on РасторжДоговора (ДирОтдПоРабСКл); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

