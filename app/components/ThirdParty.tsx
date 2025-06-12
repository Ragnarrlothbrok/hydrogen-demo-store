import {useAnalytics} from '@shopify/hydrogen';
import {useEffect} from 'react';

export function ThirdParty() {
  const {subscribe, register} = useAnalytics();
  const {ready} = register('Third Party Analytics Integration');

  useEffect(() => {
    subscribe('page_viewed', (data) => {
      console.log('ThirdPartyAnalyticsIntegration - Page viewed:', data);
    });

    ready();
  }, []);

  return null;
}
