// import icons
import {
  IoLogoYoutube,
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram,
  IoMdAddCircle,
  IoIosCheckmarkCircle,
  IoIosArrowRoundForward,
  IoLogoLinkedin,
} from 'react-icons/io';

// import images
import Features1Img from './assets/img/features-1.png';
import Features2Img from './assets/img/features-2.png';
import ChairImg from './assets/img/chair.png';
import BedImg from './assets/img/bed.png';
import CupboardImg from './assets/img/cupboard.png';
import LightingImg from './assets/img/lighting.png';
import Product1Img from './assets/img/products/product-1.png';
import Product2Img from './assets/img/products/product-2.png';
import Product3Img from './assets/img/products/product-3.png';
import Product4Img from './assets/img/products/product-4.png';
import Product5Img from './assets/img/products/product-5.png';
import Product6Img from './assets/img/products/product-6.png';
import Product7Img from './assets/img/products/product-7.png';
import Product8Img from './assets/img/products/product-8.png';
import Product9Img from './assets/img/products/product-9.png';
import Product10Img from './assets/img/products/product-10.png';
import TestimonialImg from './assets/img/testimonial.png';
import Avatar1Img from './assets/img/avatar-1.png';
import Avatar2Img from './assets/img/avatar-2.png';
import Avatar3Img from './assets/img/avatar-3.png';
import Avatar4Img from './assets/img/avatar-4.png';

export const navigation = [
  {
    name: 'Ana Sayfa',
    href: '#home',
  },
  {
    name: 'Hakkımızda',
    href: 'https://www.facebook.com/nihatshahinoglu',
  },
  {
    name: 'Ürünler',
    href: 'https://github.com/nihatsafarli',
  },
  {
    name: 'İletişim',
    href: 'https://www.linkedin.com/in/nihat-safarli-235449153/',
  },
];

export const hero = {
  title: 'Tarzınızı Evinize Yansıtan Tasarımlar',
  subtitle:' Eviniz Aşka Geldi Dekorasyonun Stil Öncüsü Mutluluk Evinizde Başlar  ',
  buttonText: 'Şimdi Alın',
};

export const stats = [
  {
    value: '3+',
    text: 'Yıllık Tecrübemiz',
  },
  {
    value: '8+',
    text: 'Ülkede 60+ Mağazamız',
  },
  {
    value: '10k+',
    text: 'Evin Mobilyası Bizden',
  },
  {
    value: '260+',
    text: 'Çeşid Mobilyalar',
  },
];

export const features = {
  image: <Features1Img />,
  title: 'Evinizi Daha Estetik Hale Getiriyoruz',
  subtitle:
    ' Bazı Detaylar Aşkı Hatırlatır En Güzel Aşklara  ',
  buttonText: 'Göster',
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Değerleme Hizmetleri',
      subtitle:
        'Evinize güzellik gelecek',
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: 'Mobilyalarınızla mutlu ortam yarat',
      subtitle:
        'Eviniz Çok Değişecek',
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: 'Seçtiğiniz En İyi Mobilya Üreticisi',
    subtitle:
      'Mobilya gücü, özellikle iki veya daha fazla işletme gezgini çalıştıranlar için çok amaçlı iş yönetim sistemi için hizmet olarak bir yazılımdır. Mobilya gücü, hizmet olarak bir yazılımdır.',
  },
};

export const newInStore = {
  title: 'Son Moda Mobilya Her Evin Hakkı',
  subtitle: 'Promosyon Fiyatları İle En Son Ürünleri Hemen Alın',
  link: 'Ürünleri Gör',
  icon: <IoIosArrowRoundForward />,
  products: [
    {
      name: 'koltuk takımları',
      image: <ChairImg />,
    },
    {
      name: 'yatak',
      image: <BedImg />,
    },
    {
      name: 'büfe',
      image: <CupboardImg />,
    },
    {
      name: 'Lambalar',
      image: <LightingImg />,
    },
  ],
};

export const products = {
  title: 'Tüm Mobilyalar',
  subtitle:
    'Hizmetimiz olarak sadece sizler için sunduğumuz ürünler, dünyanın 1 numaralı kalitesiyle en iyi ürünlerden seçilmektedir.',
  pages: [
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Cygnoos lambası',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Cygnoos Sandalye',
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Cygnoos Dolap',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Cygnoos Yumşak Sandalye',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Cygnoos Sandalye',
          price: 200,
          oldPrice: 210,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'Cygnoos Çocuk Masası',
          price: 45,
          oldPrice: 50,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'Cygnoos Köşe Sandalye',
          price: 320,
          oldPrice: 325,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Cygnoos Dolap',
          price: 225,
          oldPrice: 240,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Cygnoos Ahşap Dolap',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'Cygnoos Ofis Masası',
          price: 75,
          oldPrice: 82,
        },
      ],
    },
    {
      productList: [
        {
          image: <Product1Img />,
          icon: <IoMdAddCircle />,
          name: 'Cygnoos Tavan Lambası',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product2Img />,
          icon: <IoMdAddCircle />,
          name: 'Cygnoos Sandalye',
          price: 50,
          oldPrice: 70,
        },
        {
          image: <Product3Img />,
          icon: <IoMdAddCircle />,
          name: 'Cygnoos Büfe',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product4Img />,
          icon: <IoMdAddCircle />,
          name: 'Cygnoos Masa',
          price: 75,
          oldPrice: 82,
        },
        {
          image: <Product5Img />,
          icon: <IoMdAddCircle />,
          name: 'Cygnoos Ahşap Dolap',
          price: 200,
          oldPrice: 210,
        },
        {
          image: <Product6Img />,
          icon: <IoMdAddCircle />,
          name: 'Cygnoos Dolap',
          price: 45,
          oldPrice: 50,
        },
        {
          image: <Product7Img />,
          icon: <IoMdAddCircle />,
          name: 'Cygnoos Köşe Masa',
          price: 320,
          oldPrice: 325,
        },
        {
          image: <Product8Img />,
          icon: <IoMdAddCircle />,
          name: 'Cygnoos Ahşap Sandaye',
          price: 225,
          oldPrice: 240,
        },
        {
          image: <Product9Img />,
          icon: <IoMdAddCircle />,
          name: 'Cygnoos Büfe',
          price: 105,
          oldPrice: 120,
        },
        {
          image: <Product10Img />,
          icon: <IoMdAddCircle />,
          name: 'Cygnoos Sandalye',
          price: 75,
          oldPrice: 82,
        },
      ],
    },
  ],
};

export const testimonial = {
  title: 'Referanslarımız?',
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: 'Ali Kaya',
      occupation: 'Bellona Mobilya CEO ',
      message:
        '“Benim Tarzım O. 20 Yıldır Dünyanın Tarzı. O Yanı Başınızda.”',
    },
    {
      avatar: <Avatar2Img />,
      name: 'Ayşe Sağlam',
      occupation: 'İstikbal Mobilya Genel Müdür',
      message:
        '“Artık Mobilyada Cygnoos Moda.. Son Moda Mobilya Her Evin Hakkı”',
    },
    {
      avatar: <Avatar3Img />,
      name: 'Seda Sarı',
      occupation: 'Lazzoni Mobilya Müdür Yardımcısı',
      message:
        '“Eviniz Aşka Geldi,  Dekorasyonun Stil Öncüsü, Mutluluk Evinizde Başlar”',
    },
  ],
};

export const newsletter = {
  title: 'Siparişinizde Daha Fazla İndirim Alın',
  subtitle: 'Mail Listemize Katılın',
  placeholder: 'E-posta Adresiniz',
  buttonText: 'Katılın',
};

export const footer = {
  social: [
   
    {
      icon: <IoLogoGithub />,
      href: 'https://github.com/nihatsafarli',
    },
    {
      icon: <IoLogoLinkedin />,
      href: 'https://www.linkedin.com/in/nihat-safarli-235449153/',
    },
    {
      icon: <IoLogoFacebook />,
      href: 'https://www.facebook.com/nihatshahinoglu',
    }
  ],
  copyright: 'Cygnoos Furniture 2022 - Tüm Hakları Saklıdır..',
};
