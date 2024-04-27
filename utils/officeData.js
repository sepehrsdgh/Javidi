import { Bitcoin, Instagram, Whatsapp } from "iconsax-react";

class Information {
  constructor(title, subTitle, icon, color, name) {
    this.title = title;
    this.subTitle = subTitle;
    this.icon = icon;
    this.color = color;
    this.name = name;
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

//side bar data

const mainPage = new Information("صفحه اصلی", "/", []);

const aboutUs = new Information("درباره ما", "/aboutUs", []);

const ourService = new Information("خدمات ما", "/services", []);

const image = new Information("گالری تصاویر", "/pics", []);

const projects = new Information("پروژه ها", "/projects", [
  { title: "مسکونی", hrefs: [{ title: "مسکونی 1", href: "/projects?name=1" }] },
  { title: "تجاری", hrefs: [{ title: "تجاری 1", href: "/projects?name=2" }] },
  { title: "پزشکی", hrefs: [{ title: "پزشکی 1", href: "/projects?name=3" }] },
  {
    title: "تاسیساتی",
    hrefs: [{ title: "تاسیساتی 1", href: "/projects?name=4" }],
  },
]);

const blog = new Information("بلاگ", "/blog", []);

const contactUs = new Information("ارتباط با ما", "/contactUs", []);

const allData = [
  mainPage,
  aboutUs,
  ourService,
  image,
  projects,
  blog,
  contactUs,
];

const whatsApp = new Information("", "/", Whatsapp, "");

const linkedin = new Information("", "/", Whatsapp);

const insta = new Information("", "/", Instagram, "INSTAGRAM");

const telegram = new Information("", "/", Whatsapp);

const insta2 = new Information("", "fermidirac.co", "", "INSTAGRAM");

const email = new Information(
  "",
  "fermidirac.co@gmail.com",
  "",
  "EMAIL ADDRESS"
);

const phoneNumber = new Information(
  "",
  "05138480145-05138480145",
  "",
  ".PHONE NO"
);

const address = new Information(
  "",
  "مشهد. خیابان احمدآباد. بین بخارایی و سه راه راهنمایی",
  "جنب بانک ملت. ساختمـان معتمدی. طبقـه دوم. واحد 5",
  "OFFICE ADRES"
);

const allSocial = [whatsApp, linkedin, insta, telegram];

const addresses = [insta2, email, phoneNumber, address];

//projects

const project1 = new Information(
  "ساخت آپارتمان در حکیم نظامی",
  "/HeaderImage.jpeg",
  "/projects?name=1"
);

const project2 = new Information(
  "ساخت آپارتمان در فرمانیه",
  "/HeaderImage.jpeg",
  "/projects?name=1"
);

const project3 = new Information(
  "ساخت آپارتمان در طرقبه",
  "/HeaderImage.jpeg",
  "/projects?name=1"
);

const project4 = new Information(
  "ساخت آپارتمان در ملاصدرا",
  "/HeaderImage.jpeg",
  "/projects?name=1"
);

const allProjects = [project1, project2, project3, project4];

const stat1 = new Information("126", "پروژه تکمیل شده");

const stat2 = new Information("8", "پروژه در حال اجرا");

const stat3 = new Information("15", "جوایز و استانداردها");

const stat4 = new Information("254", "جوایز و استانداردها");

const allStats = [stat1, stat2, stat3, stat4];

//why us cards

const w1 = new Information("طراحی مقاوم", "طراحی مقاوم در برابر بلایای طبیعی");

const w2 = new Information(
  "معماری مدرن",
  "طراحی معماری با توجه به سلیقه و خواست شما"
);

const w3 = new Information(
  "طراحی داخلی",
  "طراحی داخلی همراه با بهترین متریال ها"
);

const allws = [w1, w2, w3];

export {
  allDetail,
  allP,
  allData,
  allSocial,
  allProjects,
  allStats,
  allws,
  addresses,
};
