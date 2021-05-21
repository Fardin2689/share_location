import React from 'react';
import DataInterface from '../interfaces/data.interface';

interface AppContextInterface {
  data: DataInterface[];
  setData: React.Dispatch<React.SetStateAction<DataInterface[]>>;
}

const DataContext = React.createContext<AppContextInterface | null>(null);

export default DataContext;
