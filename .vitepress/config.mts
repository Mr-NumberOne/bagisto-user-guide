import { defineConfig } from 'vitepress'
import { redirects, makeRedirectHtml } from './_redirects'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  lang: 'en-US',
  title: "Bagisto User Documentation",
  description: "Bagisto User Documentation",

  vite: {
    server: {
      host: '0.0.0.0'
    }
  },

  srcDir: './src',

  head: [
    [
      'link',
      { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
    ],
    [
      'script',
      {},
      `
       (function () {
       let script = document.createElement('script');

       script.innerHTML = 'window.chatbotConfig = { url: "https://ask.bagisto.com:5000/chat" };';

       document.body.appendChild(script);
       })();;
       `
    ],
    [
      'script',
      {
        src: 'https://bagisto.github.io/ai-chatbot/chatbot.js',
        async: true
      }
    ],
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en-US'
    },
    ar: {
      label: 'العربية',
      lang: 'ar',
      dir: 'rtl',
      title: 'وثائق مستخدم باجيستو',
      description: 'وثائق مستخدم باجيستو',
      themeConfig: {
        nav: [
          { text: 'وثائق المطور', link: 'https://devdocs.bagisto.com/' },
          { text: 'الإضافات', link: 'https://bagisto.com/en/extensions/' },
          { text: 'منتدى المجتمع', link: 'https://forums.bagisto.com/' },
          { text: 'اتصل بنا', link: 'https://bagisto.com/en/contacts/' }
        ],
        sidebar: [
          { text: 'مقدمة', link: '/ar/getting-started/introduction' },
          { text: 'أنواع المنتجات', collapsed: false, items: [
            { text: 'منتج بسيط', link: '/ar/product-types/simple-product' },
            { text: 'منتج قابل للتكوين', link: '/ar/product-types/configurable-product' },
            { text: 'منتج افتراضي', link: '/ar/product-types/virtual-product' },
            { text: 'منتج مجمع', link: '/ar/product-types/bundle-product' },
            { text: 'منتج مجمع (Grouped)', link: '/ar/product-types/grouped-product' },
            { text: 'منتج قابل للتنزيل', link: '/ar/product-types/downloadable-product' },
            { text: 'منتج الحجز', link: '/ar/product-types/booking-product' },
          ]},
          { text: 'الفئة', collapsed: false, items: [
            { text: 'إنشاء فئة', link: '/ar/category/create-category' },
          ]},
          { text: 'السمات', collapsed: false, items: [
            { text: 'أنواع إدخال السمات', link: '/ar/attribute/attribute-input' },
            { text: 'إنشاء سمات المنتج', link: '/ar/attribute/product-attribute' },
            { text: 'عائلة السمات', link: '/ar/attribute/attribute-family' },
          ]},
          { text: 'الطلبات', collapsed: false, items: [
            { text: 'إنشاء طلب', link: '/ar/orders/create-order' },
            { text: 'إنشاء فاتورة', link: '/ar/orders/create-invoice' },
            { text: 'إنشاء شحنة', link: '/ar/orders/create-shipment' },
            { text: 'إنشاء استرداد', link: '/ar/orders/create-refunds' },
            { text: 'المعاملات', link: '/ar/orders/transactions' },
          ]},
          { text: 'العملاء', collapsed: false, items: [
            { text: 'إنشاء عميل', link: '/ar/customer/create-customer' },
            { text: 'مجموعة العملاء', link: '/ar/customer/customer-group' },
            { text: 'تسعير مجموعة العملاء', link: '/ar/customer/customer-group-price' },
            { text: 'مراجعة العملاء', link: '/ar/customer/customer-review' },
          ]},
          { text: 'نظام إدارة المحتوى (CMS)', collapsed: false, items: [
            { text: 'إنشاء CMS', link: '/ar/cms/create-cms' },
          ]},
          { text: 'التسويق', collapsed: false, items: [
            { text: 'قواعد السلة', link: '/ar/marketing/cart-rules' },
            { text: 'قواعد الكتالوج', link: '/ar/marketing/catalog-rules' },
            { text: 'قوالب البريد الإلكتروني', link: '/ar/marketing/email-templates' },
            { text: 'الأحداث', link: '/ar/marketing/events' },
            { text: 'الحملات', link: '/ar/marketing/campaigns' },
            { text: 'اشتراكات النشرة الإخبارية', link: '/ar/marketing/newsletter-subscription' },
            { text: 'خرائط الموقع', link: '/ar/marketing/sitemaps' },
            { text: 'إعادة كتابة عنوان URL', link: '/ar/marketing/url-rewrite' },
            { text: 'مصطلحات البحث', link: '/ar/marketing/search-terms' },
            { text: 'مرادفات البحث', link: '/ar/marketing/search-synonyms' },
          ]},
          { text: 'التقارير', collapsed: false, items: [
            { text: 'المبيعات', link: '/ar/reporting/sales-report' },
            { text: 'العملاء', link: '/ar/reporting/customers-report' },
            { text: 'المنتجات', link: '/ar/reporting/product-report' },
          ]},
          { text: 'الإعدادات', collapsed: false, items: [
            { text: 'اللغات المحلية', link: '/ar/settings/locales' },
            { text: 'العملات', link: '/ar/settings/currencies' },
            { text: 'أسعار الصرف', link: '/ar/settings/exchange-rates' },
            { text: 'مصدر المخزون', link: '/ar/settings/inventory-source' },
            { text: 'القنوات', link: '/ar/settings/channels' },
            { text: 'المستخدمون', link: '/ar/settings/users' },
            { text: 'الأدوار', link: '/ar/settings/roles' },
            { text: 'السمات (Themes)', link: '/ar/settings/themes' },
            { text: 'الضرائب', link: '/ar/settings/taxes' },
            { text: 'نقل البيانات', link: '/ar/settings/data-transfer' },
          ]},
          { text: 'تكوين', collapsed: false, items: [
            { text: 'العنوان', link: '/ar/configure/address' },
            { text: 'السمة', link: '/ar/configure/attribute' },
            { text: 'الطلبات المتأخرة', link: '/ar/configure/back-orders' },
            { text: 'كابتشا', link: '/ar/configure/captcha' },
            { text: 'صفحة عرض السلة', link: '/ar/configure/cart-view-page' },
            { text: 'الدفع', link: '/ar/configure/checkout' },
            { text: 'الخيارات القابلة للتكوين', link: '/ar/configure/configurable-choices' },
            { text: 'المحتوى', link: '/ar/configure/content' },
            { text: 'تكوينات أسعار الصرف', link: '/ar/configure/exchange-rates-configurations' },
            { text: 'نصوص مخصصة', link: '/ar/configure/custom-scripts' },
            { text: 'التصميم', link: '/ar/configure/design' },
            { text: 'إعدادات البريد الإلكتروني', link: '/ar/configure/email-settings' },
            { text: 'الواجهة الأمامية', link: '/ar/configure/frontend' },
            { text: 'GDPR', link: '/ar/configure/gdpr' },
            { text: 'خروج الضيف', link: '/ar/configure/guest-checkout' },
            { text: 'حجم الصورة', link: '/ar/configure/image-size' },
            { text: 'إعدادات الفاتورة', link: '/ar/configure/invoice-settings' },
            { text: 'Magic AI', link: '/ar/configure/magic-ai' },
            { text: 'الإشعارات', link: '/ar/configure/notifications' },
            { text: 'إعدادات الطلب', link: '/ar/configure/orders-settings' },
            { text: 'طرق الدفع', link: '/ar/configure/payment-methods' },
            { text: 'التسعير', link: '/ar/configure/pricing' },
            { text: 'صفحة عرض المنتج', link: '/ar/configure/product-view-page ' },
            { text: 'المراجعة', link: '/ar/configure/review' },
            { text: 'المقتطفات المنسقة', link: '/ar/configure/rich-snippets' },
            { text: 'الإعدادات', link: '/ar/configure/settings' },
            { text: 'طرق الشحن', link: '/ar/configure/shipping-methods' },
            { text: 'الشحن', link: '/ar/configure/shipping' },
            { text: 'المشاركة الاجتماعية', link: '/ar/configure/social-share' },
            { text: 'الضرائب', link: '/ar/configure/taxes' },
            { text: 'وحدة الوزن', link: '/ar/configure/weight-unit' },
          ]},
          { text: 'طرق الشحن', link: '/ar/shipping-method/shipping-methods' },
          { text: 'طرق الدفع', link: '/ar/payment-method/payment-methods' },
          { text: 'سوق متعدد البائعين', collapsed: false, items: [
            { text: 'مقدمة', link: '/ar/multi-vendor-marketplace/introduction' },
            { text: 'إدارة البائعين', link: '/ar/multi-vendor-marketplace/vendor-management' },
            { text: 'إدارة الوكلاء', link: '/ar/multi-vendor-marketplace/dealership-management' },
            { text: 'إدارة الطلبات', link: '/ar/multi-vendor-marketplace/order-management' },
            { text: 'إدارة العمولات', link: '/ar/multi-vendor-marketplace/commission-management' },
            { text: 'إدارة المنتجات', link: '/ar/multi-vendor-marketplace/product-management' },
            { text: 'إدارة التقييمات', link: '/ar/multi-vendor-marketplace/rating-management' },
            { text: 'إدارة المدفوعات', link: '/ar/multi-vendor-marketplace/payment-management' },
            { text: 'ترخيص إرجاع البضائع (RMA)', link: '/ar/multi-vendor-marketplace/return-merchandise-authorization' },
            { text: 'التحميل الجماعي لكتالوج البائع', link: '/ar/multi-vendor-marketplace/seller-catalog-bulk-upload' },
            { text: 'سمات البائع', link: '/ar/multi-vendor-marketplace/seller-attributes' },
            { text: 'سمات البائع', link: '/ar/multi-vendor-marketplace/seller-attributes' },
            { text: 'إدارة اشتراكات البائعين', link: '/ar/multi-vendor-marketplace/seller-subscription-management' },
            { text: 'إدارة الدفع الجماعي', link: '/ar/multi-vendor-marketplace/mass-payout-management' },
            { text: 'الاتصالات', link: '/ar/multi-vendor-marketplace/communications' },
          ]},
          { text: 'سوق B2B', collapsed: false, items: [
            { text: 'مقدمة', link: '/ar/b2b-marketplace/introduction' },
            { text: 'طلب عروض الأسعار', link: '/ar/b2b-marketplace/request-for-quotes' },
            { text: 'التواصل بين المشتري والبائع', link: '/ar/b2b-marketplace/buyer-seller-communication' },
            { text: 'موقع المورد المصغر', link: '/ar/b2b-marketplace/supplier-microsite' },
            { text: 'عملاء محتملون للشراء', link: '/ar/b2b-marketplace/buying-leads' },
            { text: 'إدارة المراجعات', link: '/ar/b2b-marketplace/b2b-marketplace-review' },
          ]},
          { text: 'تجارة إلكترونية متعددة المستأجرين', collapsed: false, items: [
            { text: 'مقدمة', link: '/ar/multi-tenant-ecommerce/introduction' },
            { text: 'إدارة المسؤول المتميز', link: '/ar/multi-tenant-ecommerce/super-admin-management' },
            { text: 'إدارة المستأجر', link: '/ar/multi-tenant-ecommerce/tenant-management' },
            { text: 'تعيين CName', link: '/ar/multi-tenant-ecommerce/cname-mapping' },
          ]},
          { text: 'منصة التجارة الإلكترونية B2B', collapsed: false, items: [
            { text: 'مقدمة', link: '/ar/b2b-ecommerce-platform/introduction' },
            { text: 'تسجيل الشركة', link: '/ar/b2b-ecommerce-platform/company-registration' },
            { text: 'الصلاحيات المبنية على الأدوار', link: '/ar/b2b-ecommerce-platform/role-based-permissions' },
            { text: 'طلبات الشراء', link: '/ar/b2b-ecommerce-platform/purchase-orders' },
            { text: 'قوائم الطلبات', link: '/ar/b2b-ecommerce-platform/requisition-lists' },
            { text: 'الطلب السريع', link: '/ar/b2b-ecommerce-platform/quick-order' },
            { text: 'طلب عرض سعر', link: '/ar/b2b-ecommerce-platform/request-for-quote' },
            { text: 'التعامل مع عروض الأسعار', link: '/ar/b2b-ecommerce-platform/quotation-handling' },
          ]},
          { text: 'تطبيق الهاتف المحمول الأصلي', link: '/ar/open-source-mobile-app/open-source-mobile-app' },
        ],
        editLink: {
          pattern: 'https://github.com/bagisto/bagisto-docs/edit/master/src/ar/:path',
          text: 'ساعدنا في تحسين هذه الصفحة على Github.'
        },
        lastUpdated: {
          text: 'آخر تحديث',
          formatOptions: {
            dateStyle: 'full'
          }
        },
      }
    }
  },

  themeConfig: {
    siteTitle: false,

    logo: {
      light: '/logo.png',
      dark: '/logo.png',
    },

    nav: [
      { text: 'Dev Docs', link: 'https://devdocs.bagisto.com/' },
      { text: 'Extensions', link: 'https://bagisto.com/en/extensions/' },
      { text: 'Community Forum', link: 'https://forums.bagisto.com/' },
      { text: 'Contact Us', link: 'https://bagisto.com/en/contacts/' }
    ],

    editLink: {
      pattern: 'https://github.com/bagisto/bagisto-docs/edit/master/src/:path',
      text: 'Help us improve this page on Github.'
    },

    lastUpdated: {
      text: 'Last Updated',
      formatOptions: {
        dateStyle: 'full'
      }
    },

    sidebar: [
      {
        text: 'Introduction',
        link: '/getting-started/introduction'
      },

      {
        text: 'Product Types',
        collapsed: false,
        items: [
          { text: 'Simple Product', link: '/product-types/simple-product' },
          { text: 'Configurable Product', link: '/product-types/configurable-product' },
          { text: 'Virtual Product', link: '/product-types/virtual-product' },
          { text: 'Bundle Product', link: '/product-types/bundle-product' },
          { text: 'Grouped Product', link: '/product-types/grouped-product' },
          { text: 'Downlodable Product', link: '/product-types/downloadable-product' },
          { text: 'Booking Product', link: '/product-types/booking-product' },
        ]
      },

      {
        text: 'Category',
        collapsed: false,
        items: [
          { text: 'Create Category', link: '/category/create-category' },
        ]
      },

      {
        text: 'Attributes',
        collapsed: false,
        items: [
          { text: 'Attribute Input Types', link: '/attribute/attribute-input' },
          { text: 'Create Product Attributes', link: '/attribute/product-attribute' },
          { text: 'Attribute Family', link: '/attribute/attribute-family' },
        ]
      },

      {
        text: 'Orders',
        collapsed: false,
        items: [
          { text: 'Create Order', link: '/orders/create-order' },
          { text: 'Create Invoice', link: '/orders/create-invoice' },
          { text: 'Create Shipment', link: '/orders/create-shipment' },
          { text: 'Create Refunds', link: '/orders/create-refunds' },
          { text: 'Transactions', link: '/orders/transactions' },
        ]
      },
      {
        text: 'Customers',
        collapsed: false,
        items: [
          { text: 'Create Customer', link: '/customer/create-customer' },
          { text: 'Customer Group', link: '/customer/customer-group' },
          { text: 'Customer Group Pricing', link: '/customer/customer-group-price' },
          { text: 'Customer Review', link: '/customer/customer-review' },
        ]
      },

      {
        text: 'CMS',
        collapsed: false,
        items: [
          { text: 'Create CMS', link: '/cms/create-cms' },
        ]
      },

      {
        text: 'Marketing',
        collapsed: false,
        items: [
          { text: 'Cart Rules', link: '/marketing/cart-rules' },
          { text: 'Catalog Rules', link: '/marketing/catalog-rules' },
          { text: 'Email Templates', link: '/marketing/email-templates' },
          { text: 'Events', link: '/marketing/events' },
          { text: 'Campaigns', link: '/marketing/campaigns' },
          { text: 'Newsletter Subscriptions', link: '/marketing/newsletter-subscription' },
          { text: 'Sitemaps', link: '/marketing/sitemaps' },
          { text: 'URL Rewrite', link: '/marketing/url-rewrite' },
          { text: 'Search Terms', link: '/marketing/search-terms' },
          { text: 'Search Synonyms', link: '/marketing/search-synonyms' },
        ]
      },

      {
        text: 'Reporting',
        collapsed: false,
        items: [
          { text: 'Sales', link: '/reporting/sales-report' },
          { text: 'Customers', link: '/reporting/customers-report' },
          { text: 'Products', link: '/reporting/product-report' },
        ]
      },

      {
        text: 'Settings',
        collapsed: false,
        items: [
          { text: 'Locales', link: '/settings/locales' },
          { text: 'Currencies', link: '/settings/currencies' },
          { text: 'Exchange Rates', link: '/settings/exchange-rates' },
          { text: 'Inventory Source', link: '/settings/inventory-source' },
          { text: 'Channels', link: '/settings/channels' },
          { text: 'Users', link: '/settings/users' },
          { text: 'Roles', link: '/settings/roles' },
          { text: 'Themes', link: '/settings/themes' },
          { text: 'Taxes', link: '/settings/taxes' },
          { text: 'Data Transfer', link: '/settings/data-transfer' },
        ]
      },

      {
        text: 'Configure',
        collapsed: false,
        items: [
          { text: 'Address', link: '/configure/address' },
          { text: 'Attribute', link: '/configure/attribute' },
          { text: 'Back Orders', link: '/configure/back-orders' },
          { text: 'Captcha', link: '/configure/captcha' },
          { text: 'Cart View Page', link: '/configure/cart-view-page' },
          { text: 'Checkout', link: '/configure/checkout' },
          { text: 'Configurable Choices', link: '/configure/configurable-choices' },
          { text: 'Content', link: '/configure/content' },
          { text: 'Exchange Rates Configurations', link: '/configure/exchange-rates-configurations' },
          { text: 'Custom Scripts', link: '/configure/custom-scripts' },
          { text: 'Design', link: '/configure/design' },
          { text: 'Email Settings', link: '/configure/email-settings' },
          { text: 'Frontend', link: '/configure/frontend' },
          { text: 'GDPR', link: '/configure/gdpr' },
          { text: 'Guest Checkout', link: '/configure/guest-checkout' },
          { text: 'Image Size', link: '/configure/image-size' },
          { text: 'Invoice Settings', link: '/configure/invoice-settings' },
          { text: 'Magic AI', link: '/configure/magic-ai' },
          { text: 'Notifications', link: '/configure/notifications' },
          { text: 'Order Settings', link: '/configure/orders-settings' },
          { text: 'Payment Methods', link: '/configure/payment-methods' },
          { text: 'Pricing', link: '/configure/pricing' },
          { text: 'Product View Page', link: '/configure/product-view-page ' },
          { text: 'Review', link: '/configure/review' },
          { text: 'Rich Snippets', link: '/configure/rich-snippets' },
          { text: 'Settings', link: '/configure/settings' },
          { text: 'Shipping Methods', link: '/configure/shipping-methods' },
          { text: 'Shipping', link: '/configure/shipping' },
          { text: 'Social Share', link: '/configure/social-share' },
          { text: 'Taxes', link: '/configure/taxes' },
          { text: 'Weight Unit', link: '/configure/weight-unit' },
        ]
      },

      {
        text: 'Shipping Methods',
        link: '/shipping-method/shipping-methods'
      },

      {
        text: 'Payment Methods',
        link: '/payment-method/payment-methods'
      },

      {
        text: 'Multi Vendor Marketplace',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/multi-vendor-marketplace/introduction' },
          { text: 'Vendor Management', link: '/multi-vendor-marketplace/vendor-management' },
          { text: 'Dealership Management', link: '/multi-vendor-marketplace/dealership-management' },
          { text: 'Order Management', link: '/multi-vendor-marketplace/order-management' },
          { text: 'Commission Management', link: '/multi-vendor-marketplace/commission-management' },
          { text: 'Product Management', link: '/multi-vendor-marketplace/product-management' },
          { text: 'Rating Management', link: '/multi-vendor-marketplace/rating-management' },
          { text: 'Payment Management', link: '/multi-vendor-marketplace/payment-management' },
          { text: 'Return Merchandise Authorization (RMA)', link: '/multi-vendor-marketplace/return-merchandise-authorization' },
          { text: 'Seller Catalog Bulk Upload', link: '/multi-vendor-marketplace/seller-catalog-bulk-upload' },
          { text: 'Seller Attributes', link: '/multi-vendor-marketplace/seller-attributes' },
          { text: 'Seller Attributes', link: '/multi-vendor-marketplace/seller-attributes' },
          { text: 'Seller Subscription Management', link: '/multi-vendor-marketplace/seller-subscription-management' },
          { text: 'Mass Payout Management', link: '/multi-vendor-marketplace/mass-payout-management' },
          { text: 'Communications', link: '/multi-vendor-marketplace/communications' },
        ]
      },

      {
        text: 'B2B Marketplace',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/b2b-marketplace/introduction' },
          { text: 'Request for Quotes', link: '/b2b-marketplace/request-for-quotes' },
          { text: 'Buyer Seller Communication', link: '/b2b-marketplace/buyer-seller-communication' },
          { text: 'Supplier Microsite', link: '/b2b-marketplace/supplier-microsite' },
          { text: 'Buying leads', link: '/b2b-marketplace/buying-leads' },
          { text: 'Review Management', link: '/b2b-marketplace/b2b-marketplace-review' },
        ]
      },

      {
        text: 'Multi Tenant Ecommerce',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/multi-tenant-ecommerce/introduction' },
          { text: 'Super Admin Management', link: '/multi-tenant-ecommerce/super-admin-management' },
          { text: 'Tenant Management', link: '/multi-tenant-ecommerce/tenant-management' },
          { text: 'CName Mapping', link: '/multi-tenant-ecommerce/cname-mapping' },
        ]
      },

      {
        text: 'B2B eCommerce Platform',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/b2b-ecommerce-platform/introduction' },
          { text: 'Company Registration', link: '/b2b-ecommerce-platform/company-registration' },
          { text: 'Role Based Permissions', link: '/b2b-ecommerce-platform/role-based-permissions' },
          { text: 'Purchase Orders', link: '/b2b-ecommerce-platform/purchase-orders' },
          { text: 'Requisition Lists', link: '/b2b-ecommerce-platform/requisition-lists' },
          { text: 'Quick Order', link: '/b2b-ecommerce-platform/quick-order' },
          { text: 'Request for Quote', link: '/b2b-ecommerce-platform/request-for-quote' },
          { text: 'Quotation Handling', link: '/b2b-ecommerce-platform/quotation-handling' },
        ]
      },

      {
        text: 'Native Mobile App',
        link: '/open-source-mobile-app/open-source-mobile-app'
      },

    ],

    outline: {
      level: 'deep'
    },
    
    footer: {
      message: 'Released under the <a href="https://opensource.org/licenses/mit" target="_blank" class="mit-license">MIT License</a>.',
      copyright: `Copyright © ${new Date().getFullYear()} Webkul`
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bagisto/bagisto' }
    ],

    search: {
      provider: 'local'
    }
  },

  buildEnd(siteConfig) {
    const outDir = siteConfig.outDir

    Object.entries(redirects).forEach(([from, to]) => {
      if (from.includes('*')) {
        console.warn(`⚠️ Skipping wildcard redirect: ${from} -> ${to}`)
        return
      }

      let filePath

      if (from.endsWith('.html')) {
        filePath = path.join(outDir, from)
      } else {
        filePath = path.join(outDir, from, 'index.html')
      }

      fs.mkdirSync(path.dirname(filePath), { recursive: true })
      fs.writeFileSync(filePath, makeRedirectHtml(to), 'utf-8')
      console.log(`✅ Redirect created: ${from} -> ${to}`)
    })
  }
})
