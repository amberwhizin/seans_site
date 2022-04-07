import { useEffect, useState } from 'react';
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

export const useIsTabletOrMobile = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1438px)' });
  return isTabletOrMobile;
};
