import React from 'react';
import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    Inject,
    Legend,
    Category,
    Tooltip,
    ColumnSeries,
    DataLabel,
} from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const Bar = () => {
    const { currentMode } = useStateContext();

    return (
        <div className='m-4 mt-24 rounded-3xl bg-white p-10 dark:bg-secondary-dark-bg md:m-10'>
            <ChartsHeader category='Bar' title='Olympic Medal Counts - RIO' />
            <div className='w-full'>
                <ChartComponent
                    id='charts'
                    primaryXAxis={barPrimaryXAxis}
                    primaryYAxis={barPrimaryYAxis}
                    chartArea={{ border: { width: 0 } }}
                    tooltip={{ enable: true }}
                    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
                    legendSettings={{ background: 'white' }}
                >
                    <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
                    <SeriesCollectionDirective>
                        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                        {barCustomSeries.map((item, index) => (
                            <SeriesDirective key={index} {...item} />
                        ))}
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    );
};

export default Bar;
