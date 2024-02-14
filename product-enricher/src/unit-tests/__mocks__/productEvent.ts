export default (
  message?: Record<string, string>,
  data?: Record<string, unknown>,
) => ({
  specversion: '1.0',
  type: 'events.production.product.v1.ProductUpdated',
  source: '/egen/production/product-api/1.2.3',
  subject: 'Nike Air Zoom Pegasus 38',
  id: '69e88ca4-e045-445a-af61-e908a146b0fe',
  time: '2022-04-10T15:31:00Z',
  datacontenttype: 'application/json',
  data: {
    id: '74702d46-abfb-486a-8949-64761933e002',
    sku: 'NIKE_AIR_ZOOM_PEG_38',
    name: 'Nike Air Zoom Pegasus 38',
    brand: 'Nike',
    description:
      'The road is your runway. Get ready to take flight in the workhorse with wings.',
    imageUrl: 'https://static.nike.com/a/images/blah-blah.jpg',
    price: 120.0,
    createdAt: '2022-04-05T14:31:00Z',
    createdBy: 'product-api-user',
    modifiedAt: '2022-04-10T15:31:00Z',
    modifiedBy: 'product-enricher-user',
    ...data,
  },
  ...message,
});
