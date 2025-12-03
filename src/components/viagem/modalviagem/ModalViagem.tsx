import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import FormViagem from '../formviagem/FormViagem';


function ModalViagem() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='border rounded px-4 py-2 bg-white border-white hover:bg-gray-800 hover:text-gray-200 hover:border-gray-800 cursor-pointer'>
                        Nova Viagem
                    </button>
                }
                modal
                contentStyle={{
                    borderRadius: '1rem',
                    paddingBottom: '2rem'
                }}
            >
                <FormViagem />
            </Popup>
        </>
    );
}

export default ModalViagem;