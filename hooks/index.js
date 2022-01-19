import { useEffect, useState, useRef } from 'react';
import { load } from 'js-yaml';
import { useMediaQuery } from 'react-responsive';

export const useYaml = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch('../text/copy.yaml')
      .then((response) => response.text())
      .then((yaml) => load(yaml))
      .then((yamlData) => {
        setData(yamlData);
      });
  }, []);
  return data;
};

export const useHubSpotForm = () => {
  const exists = useRef();
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if (window.hbspt && !exists.current) {
        exists.current = true;
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '7640600',
          formId: '208ef12e-c09e-4398-ae9b-688f681ff43e',
        });
        const container = document.createElement('div');
        // Currently no styling, but leaving in case we ever decide to!
        container.classList.add('hbspt-form-container');
        const hubSpotForm = document.querySelector('.hbspt-form');
        hubSpotForm.remove();
        const hubSpotFormCloned = hubSpotForm.cloneNode(true);
        document.body.appendChild(container);
        container.appendChild(hubSpotFormCloned);
      }
    });
  }, []);
};

export const useIsTabletOrMobile = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1438px)' });
  return isTabletOrMobile;
};
