import React from 'react';
import { Header } from '../components';
import {
    ColumnDirective,
    ColumnsDirective,
    Edit,
    Filter,
    GridComponent,
    Inject,
    Page,
    Selection,
    Sort,
    Toolbar,
} from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';

const Customers = () => {
    const toolbarOptions = ['Delete'];
    const editing = { allowDeleting: true, allowEditing: true };

    return (
        <div className='m-2 mt-24 rounded-3xl bg-white p-2 md:m-10 md:p-10'>
            <Header category='Page' title='Customers' />
            <GridComponent
                dataSource={customersData}
                width='auto'
                allowPaging
                allowSorting
                pageSettings={{ pageCount: 5 }}
                toolbar={toolbarOptions}
                editSettings={editing}
            >
                <ColumnsDirective>
                    {customersGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item} />
                    ))}
                </ColumnsDirective>
                <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />
            </GridComponent>
        </div>
    );
};

export default Customers;
