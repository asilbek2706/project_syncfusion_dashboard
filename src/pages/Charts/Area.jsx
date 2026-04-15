import {
    ChartComponent,
    DateTime,
    Inject,
    Legend,
    SplineAreaSeries,
    SeriesCollectionDirective,
    SeriesDirective,
} from '@syncfusion/ej2-react-charts';

import { Header } from '../../components';

import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Area = () => {
    const { currentMode } = useStateContext();

    return (
        <div className='m-4 mt-24 rounded-2xl bg-white p-10 dark:bg-secondary-dark-bg dark:text-[#fff] md:m-10'>
            <Header category='Chart' title='Inflation Rate in Percentage' />

            <ChartComponent
                id='area-chart'
                height='420px'
                primaryXAxis={areaPrimaryXAxis}
                primaryYAxis={areaPrimaryYAxis}
                chartArea={{ border: { width: 0 } }}
                tooltip={{ enable: true }}
                background={currentMode === 'Dark' ? '#33373E' : '#fff'}
                color={currentMode === 'Dark' ? '#fff' : '#33373E'}
                legendSettings={{ background: 'white' }}
            >
                <Inject services={[SplineAreaSeries, DateTime, Legend]} />
                <SeriesCollectionDirective>
                    {areaCustomSeries.map((item, index) => (
                        <SeriesDirective key={index} {...item} />
                    ))}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    );
};

export default Area;
