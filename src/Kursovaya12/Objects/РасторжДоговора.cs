﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kursovaya12
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Расторжение договора.
    /// </summary>
    // *** Start programmer edit section *** (РасторжДоговора CustomAttributes)

    // *** End programmer edit section *** (РасторжДоговора CustomAttributes)
    [AutoAltered()]
    [Caption("Расторжение договора")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("РасторжДоговораE", new string[] {
            "Дата as \'Дата\'",
            "Номер as \'Номер\'"})]
    [View("РасторжДоговораL", new string[] {
            "Дата as \'Дата\'",
            "Номер as \'Номер\'"})]
    public class РасторжДоговора : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДата;
        
        private int fНомер;
        
        private IIS.Kursovaya12.Клиент fКлиент;
        
        private IIS.Kursovaya12.ДирОтдПоРабСКл fДирОтдПоРабСКл;
        
        // *** Start programmer edit section *** (РасторжДоговора CustomMembers)

        // *** End programmer edit section *** (РасторжДоговора CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (РасторжДоговора.Дата CustomAttributes)

        // *** End programmer edit section *** (РасторжДоговора.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (РасторжДоговора.Дата Get start)

                // *** End programmer edit section *** (РасторжДоговора.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (РасторжДоговора.Дата Get end)

                // *** End programmer edit section *** (РасторжДоговора.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасторжДоговора.Дата Set start)

                // *** End programmer edit section *** (РасторжДоговора.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (РасторжДоговора.Дата Set end)

                // *** End programmer edit section *** (РасторжДоговора.Дата Set end)
            }
        }
        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (РасторжДоговора.Номер CustomAttributes)

        // *** End programmer edit section *** (РасторжДоговора.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (РасторжДоговора.Номер Get start)

                // *** End programmer edit section *** (РасторжДоговора.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (РасторжДоговора.Номер Get end)

                // *** End programmer edit section *** (РасторжДоговора.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасторжДоговора.Номер Set start)

                // *** End programmer edit section *** (РасторжДоговора.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (РасторжДоговора.Номер Set end)

                // *** End programmer edit section *** (РасторжДоговора.Номер Set end)
            }
        }
        
        /// <summary>
        /// Расторжение договора.
        /// </summary>
        // *** Start programmer edit section *** (РасторжДоговора.ДирОтдПоРабСКл CustomAttributes)

        // *** End programmer edit section *** (РасторжДоговора.ДирОтдПоРабСКл CustomAttributes)
        [PropertyStorage(new string[] {
                "ДирОтдПоРабСКл"})]
        [NotNull()]
        public virtual IIS.Kursovaya12.ДирОтдПоРабСКл ДирОтдПоРабСКл
        {
            get
            {
                // *** Start programmer edit section *** (РасторжДоговора.ДирОтдПоРабСКл Get start)

                // *** End programmer edit section *** (РасторжДоговора.ДирОтдПоРабСКл Get start)
                IIS.Kursovaya12.ДирОтдПоРабСКл result = this.fДирОтдПоРабСКл;
                // *** Start programmer edit section *** (РасторжДоговора.ДирОтдПоРабСКл Get end)

                // *** End programmer edit section *** (РасторжДоговора.ДирОтдПоРабСКл Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасторжДоговора.ДирОтдПоРабСКл Set start)

                // *** End programmer edit section *** (РасторжДоговора.ДирОтдПоРабСКл Set start)
                this.fДирОтдПоРабСКл = value;
                // *** Start programmer edit section *** (РасторжДоговора.ДирОтдПоРабСКл Set end)

                // *** End programmer edit section *** (РасторжДоговора.ДирОтдПоРабСКл Set end)
            }
        }
        
        /// <summary>
        /// Расторжение договора.
        /// </summary>
        // *** Start programmer edit section *** (РасторжДоговора.Клиент CustomAttributes)

        // *** End programmer edit section *** (РасторжДоговора.Клиент CustomAttributes)
        [PropertyStorage(new string[] {
                "Клиент"})]
        [NotNull()]
        public virtual IIS.Kursovaya12.Клиент Клиент
        {
            get
            {
                // *** Start programmer edit section *** (РасторжДоговора.Клиент Get start)

                // *** End programmer edit section *** (РасторжДоговора.Клиент Get start)
                IIS.Kursovaya12.Клиент result = this.fКлиент;
                // *** Start programmer edit section *** (РасторжДоговора.Клиент Get end)

                // *** End programmer edit section *** (РасторжДоговора.Клиент Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РасторжДоговора.Клиент Set start)

                // *** End programmer edit section *** (РасторжДоговора.Клиент Set start)
                this.fКлиент = value;
                // *** Start programmer edit section *** (РасторжДоговора.Клиент Set end)

                // *** End programmer edit section *** (РасторжДоговора.Клиент Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "РасторжДоговораE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РасторжДоговораE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РасторжДоговораE", typeof(IIS.Kursovaya12.РасторжДоговора));
                }
            }
            
            /// <summary>
            /// "РасторжДоговораL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РасторжДоговораL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РасторжДоговораL", typeof(IIS.Kursovaya12.РасторжДоговора));
                }
            }
        }
    }
}
