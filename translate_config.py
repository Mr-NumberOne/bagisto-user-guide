import json
from deep_translator import GoogleTranslator

translator = GoogleTranslator(source='en', target='ar')

nav = [
  {"text": "Dev Docs", "link": "https://devdocs.bagisto.com/"},
  {"text": "Extensions", "link": "https://bagisto.com/en/extensions/"},
  {"text": "Community Forum", "link": "https://forums.bagisto.com/"},
  {"text": "Contact Us", "link": "https://bagisto.com/en/contacts/"}
]

sidebar = [
  {"text": 'Introduction', "link": '/ar/getting-started/introduction'},
  {"text": 'Product Types', "collapsed": False, "items": [
      {"text": 'Simple Product', "link": '/ar/product-types/simple-product'},
      {"text": 'Configurable Product', "link": '/ar/product-types/configurable-product'},
      {"text": 'Virtual Product', "link": '/ar/product-types/virtual-product'},
      {"text": 'Bundle Product', "link": '/ar/product-types/bundle-product'},
      {"text": 'Grouped Product', "link": '/ar/product-types/grouped-product'},
      {"text": 'Downlodable Product', "link": '/ar/product-types/downloadable-product'},
      {"text": 'Booking Product', "link": '/ar/product-types/booking-product'},
  ]},
  {"text": 'Category', "collapsed": False, "items": [
      {"text": 'Create Category', "link": '/ar/category/create-category'},
  ]},
  {"text": 'Attributes', "collapsed": False, "items": [
      {"text": 'Attribute Input Types', "link": '/ar/attribute/attribute-input'},
      {"text": 'Create Product Attributes', "link": '/ar/attribute/product-attribute'},
      {"text": 'Attribute Family', "link": '/ar/attribute/attribute-family'},
  ]},
  {"text": 'Orders', "collapsed": False, "items": [
      {"text": 'Create Order', "link": '/ar/orders/create-order'},
      {"text": 'Create Invoice', "link": '/ar/orders/create-invoice'},
      {"text": 'Create Shipment', "link": '/ar/orders/create-shipment'},
      {"text": 'Create Refunds', "link": '/ar/orders/create-refunds'},
      {"text": 'Transactions', "link": '/ar/orders/transactions'},
  ]},
  {"text": 'Customers', "collapsed": False, "items": [
      {"text": 'Create Customer', "link": '/ar/customer/create-customer'},
      {"text": 'Customer Group', "link": '/ar/customer/customer-group'},
      {"text": 'Customer Group Pricing', "link": '/ar/customer/customer-group-price'},
      {"text": 'Customer Review', "link": '/ar/customer/customer-review'},
  ]},
  {"text": 'CMS', "collapsed": False, "items": [
      {"text": 'Create CMS', "link": '/ar/cms/create-cms'},
  ]},
  {"text": 'Marketing', "collapsed": False, "items": [
      {"text": 'Cart Rules', "link": '/ar/marketing/cart-rules'},
      {"text": 'Catalog Rules', "link": '/ar/marketing/catalog-rules'},
      {"text": 'Email Templates', "link": '/ar/marketing/email-templates'},
      {"text": 'Events', "link": '/ar/marketing/events'},
      {"text": 'Campaigns', "link": '/ar/marketing/campaigns'},
      {"text": 'Newsletter Subscriptions', "link": '/ar/marketing/newsletter-subscription'},
      {"text": 'Sitemaps', "link": '/ar/marketing/sitemaps'},
      {"text": 'URL Rewrite', "link": '/ar/marketing/url-rewrite'},
      {"text": 'Search Terms', "link": '/ar/marketing/search-terms'},
      {"text": 'Search Synonyms', "link": '/ar/marketing/search-synonyms'},
  ]},
  {"text": 'Reporting', "collapsed": False, "items": [
      {"text": 'Sales', "link": '/ar/reporting/sales-report'},
      {"text": 'Customers', "link": '/ar/reporting/customers-report'},
      {"text": 'Products', "link": '/ar/reporting/product-report'},
  ]},
  {"text": 'Settings', "collapsed": False, "items": [
      {"text": 'Locales', "link": '/ar/settings/locales'},
      {"text": 'Currencies', "link": '/ar/settings/currencies'},
      {"text": 'Exchange Rates', "link": '/ar/settings/exchange-rates'},
      {"text": 'Inventory Source', "link": '/ar/settings/inventory-source'},
      {"text": 'Channels', "link": '/ar/settings/channels'},
      {"text": 'Users', "link": '/ar/settings/users'},
      {"text": 'Roles', "link": '/ar/settings/roles'},
      {"text": 'Themes', "link": '/ar/settings/themes'},
      {"text": 'Taxes', "link": '/ar/settings/taxes'},
      {"text": 'Data Transfer', "link": '/ar/settings/data-transfer'},
  ]},
  {"text": 'Configure', "collapsed": False, "items": [
      {"text": 'Address', "link": '/ar/configure/address'},
      {"text": 'Attribute', "link": '/ar/configure/attribute'},
      {"text": 'Back Orders', "link": '/ar/configure/back-orders'},
      {"text": 'Captcha', "link": '/ar/configure/captcha'},
      {"text": 'Cart View Page', "link": '/ar/configure/cart-view-page'},
      {"text": 'Checkout', "link": '/ar/configure/checkout'},
      {"text": 'Configurable Choices', "link": '/ar/configure/configurable-choices'},
      {"text": 'Content', "link": '/ar/configure/content'},
      {"text": 'Exchange Rates Configurations', "link": '/ar/configure/exchange-rates-configurations'},
      {"text": 'Custom Scripts', "link": '/ar/configure/custom-scripts'},
      {"text": 'Design', "link": '/ar/configure/design'},
      {"text": 'Email Settings', "link": '/ar/configure/email-settings'},
      {"text": 'Frontend', "link": '/ar/configure/frontend'},
      {"text": 'GDPR', "link": '/ar/configure/gdpr'},
      {"text": 'Guest Checkout', "link": '/ar/configure/guest-checkout'},
      {"text": 'Image Size', "link": '/ar/configure/image-size'},
      {"text": 'Invoice Settings', "link": '/ar/configure/invoice-settings'},
      {"text": 'Magic AI', "link": '/ar/configure/magic-ai'},
      {"text": 'Notifications', "link": '/ar/configure/notifications'},
      {"text": 'Order Settings', "link": '/ar/configure/orders-settings'},
      {"text": 'Payment Methods', "link": '/ar/configure/payment-methods'},
      {"text": 'Pricing', "link": '/ar/configure/pricing'},
      {"text": 'Product View Page', "link": '/ar/configure/product-view-page '},
      {"text": 'Review', "link": '/ar/configure/review'},
      {"text": 'Rich Snippets', "link": '/ar/configure/rich-snippets'},
      {"text": 'Settings', "link": '/ar/configure/settings'},
      {"text": 'Shipping Methods', "link": '/ar/configure/shipping-methods'},
      {"text": 'Shipping', "link": '/ar/configure/shipping'},
      {"text": 'Social Share', "link": '/ar/configure/social-share'},
      {"text": 'Taxes', "link": '/ar/configure/taxes'},
      {"text": 'Weight Unit', "link": '/ar/configure/weight-unit'},
  ]},
  {"text": 'Shipping Methods', "link": '/ar/shipping-method/shipping-methods'},
  {"text": 'Payment Methods', "link": '/ar/payment-method/payment-methods'},
  {"text": 'Multi Vendor Marketplace', "collapsed": False, "items": [
      {"text": 'Introduction', "link": '/ar/multi-vendor-marketplace/introduction'},
      {"text": 'Vendor Management', "link": '/ar/multi-vendor-marketplace/vendor-management'},
      {"text": 'Dealership Management', "link": '/ar/multi-vendor-marketplace/dealership-management'},
      {"text": 'Order Management', "link": '/ar/multi-vendor-marketplace/order-management'},
      {"text": 'Commission Management', "link": '/ar/multi-vendor-marketplace/commission-management'},
      {"text": 'Product Management', "link": '/ar/multi-vendor-marketplace/product-management'},
      {"text": 'Rating Management', "link": '/ar/multi-vendor-marketplace/rating-management'},
      {"text": 'Payment Management', "link": '/ar/multi-vendor-marketplace/payment-management'},
      {"text": 'Return Merchandise Authorization (RMA)', "link": '/ar/multi-vendor-marketplace/return-merchandise-authorization'},
      {"text": 'Seller Catalog Bulk Upload', "link": '/ar/multi-vendor-marketplace/seller-catalog-bulk-upload'},
      {"text": 'Seller Attributes', "link": '/ar/multi-vendor-marketplace/seller-attributes'},
      {"text": 'Seller Attributes', "link": '/ar/multi-vendor-marketplace/seller-attributes'},
      {"text": 'Seller Subscription Management', "link": '/ar/multi-vendor-marketplace/seller-subscription-management'},
      {"text": 'Mass Payout Management', "link": '/ar/multi-vendor-marketplace/mass-payout-management'},
      {"text": 'Communications', "link": '/ar/multi-vendor-marketplace/communications'},
  ]},
  {"text": 'B2B Marketplace', "collapsed": False, "items": [
      {"text": 'Introduction', "link": '/ar/b2b-marketplace/introduction'},
      {"text": 'Request for Quotes', "link": '/ar/b2b-marketplace/request-for-quotes'},
      {"text": 'Buyer Seller Communication', "link": '/ar/b2b-marketplace/buyer-seller-communication'},
      {"text": 'Supplier Microsite', "link": '/ar/b2b-marketplace/supplier-microsite'},
      {"text": 'Buying leads', "link": '/ar/b2b-marketplace/buying-leads'},
      {"text": 'Review Management', "link": '/ar/b2b-marketplace/b2b-marketplace-review'},
  ]},
  {"text": 'Multi Tenant Ecommerce', "collapsed": False, "items": [
      {"text": 'Introduction', "link": '/ar/multi-tenant-ecommerce/introduction'},
      {"text": 'Super Admin Management', "link": '/ar/multi-tenant-ecommerce/super-admin-management'},
      {"text": 'Tenant Management', "link": '/ar/multi-tenant-ecommerce/tenant-management'},
      {"text": 'CName Mapping', "link": '/ar/multi-tenant-ecommerce/cname-mapping'},
  ]},
  {"text": 'B2B eCommerce Platform', "collapsed": False, "items": [
      {"text": 'Introduction', "link": '/ar/b2b-ecommerce-platform/introduction'},
      {"text": 'Company Registration', "link": '/ar/b2b-ecommerce-platform/company-registration'},
      {"text": 'Role Based Permissions', "link": '/ar/b2b-ecommerce-platform/role-based-permissions'},
      {"text": 'Purchase Orders', "link": '/ar/b2b-ecommerce-platform/purchase-orders'},
      {"text": 'Requisition Lists', "link": '/ar/b2b-ecommerce-platform/requisition-lists'},
      {"text": 'Quick Order', "link": '/ar/b2b-ecommerce-platform/quick-order'},
      {"text": 'Request for Quote', "link": '/ar/b2b-ecommerce-platform/request-for-quote'},
      {"text": 'Quotation Handling', "link": '/ar/b2b-ecommerce-platform/quotation-handling'},
  ]},
  {"text": 'Native Mobile App', "link": '/ar/open-source-mobile-app/open-source-mobile-app'}
]

def translate_obj(obj):
    if isinstance(obj, list):
        for item in obj:
            translate_obj(item)
    elif isinstance(obj, dict):
        if "text" in obj:
            obj["text"] = translator.translate(obj["text"])
        if "items" in obj:
            translate_obj(obj["items"])

translate_obj(nav)
translate_obj(sidebar)

with open('ar_nav_sidebar.json', 'w', encoding='utf-8') as f:
    json.dump({"nav": nav, "sidebar": sidebar}, f, ensure_ascii=False, indent=2)
