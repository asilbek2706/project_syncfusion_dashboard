import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';

const change = (args) => {
    document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
};

const ColorPicker = () => {
    return (
        <div className={'m-2 mt-24 rounded-3xl bg-white p-2 md:m-10 md:p-10'}>
            <Header category={'App'} title={'Color Picker'} />
            <div className='text-center'>
                <div id='preview' />
                <div className='flex flex-wrap items-start justify-center gap-20'>
                    <div>
                        <p className='mb-4 mt-2 text-2xl font-semibold'>Inline Palette</p>
                        <ColorPickerComponent
                            id='inline-palette'
                            mode='Palette'
                            modeSwitcher={false}
                            inline
                            showButtons={false}
                            change={change}
                        />
                    </div>
                    <div>
                        <p className='mb-4 mt-2 text-2xl font-semibold'>Inline Picker</p>
                        <ColorPickerComponent
                            id='inline-picker'
                            mode='Picker'
                            modeSwitcher={false}
                            inline
                            showButtons={false}
                            change={change}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ColorPicker;
