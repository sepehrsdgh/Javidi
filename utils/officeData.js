import { Bitcoin } from "iconsax-react";

class Information {
  constructor(title, subTitle, icon, color) {
    this.title = title;
    this.subTitle = subTitle;
    this.icon = icon;
    this.color = color;
  }
}

//4 pic

const detail1 = new Information(
  "تعریف پروژه",
  "ارائه طرح‌ توجیهی و سرمایه‌گذاری",
  Bitcoin
);

const detail2 = new Information(
  "طراحی و مشاوره",
  "… طراحی سازه، معماری، مکانیکی و",
  Bitcoin
);

const detail3 = new Information(
  "بهره برداری",
  "بهره‌برداری و خدمات پس از فروش",
  Bitcoin
);

const detail4 = new Information("اجرا", "مدیریت پیمان و مدیریت طرح", Bitcoin);

const allDetail = [detail1, detail2, detail3, detail4];

//about us section
const p1 =
  "شرکت ساختمانی و تاسیساتی فرمی دیراک با اهداف بلندمدت برای ارتقای سطح کیفیت زندگی، به عنوان یک نهاد پویا و خلاق در عرصه ساخت و ساز، از سال 1360 آغاز به فعالیت کرده است. این شرکت از طریق بهره‌گیری از تکنولوژی‌های نوین و روش‌های ساختمانی پیشرفته، به طراحی و اجرای پروژه‌های متنوع و منحصر به فرد با توجه به نیازهای مشتریان و جامعه، به دنبال ارائه راهکارهای جدید و هوشمندانه برای بهبود کیفیت زندگی و محیط زندگی مسکونی است";

const p2 = `شرکت فرمی دیراک با کادری جوان و با انگیزه در راستای ارائه خدماتی کامل در کوتاه ترین زمان و بالاترین کیفیت با شعار" با ما رویاهایتان "را به واقعیت توانسته در کنار فعالان صنعت ساختمان بماند.`;

const allP = [p1, p2];

export { allDetail, allP };
