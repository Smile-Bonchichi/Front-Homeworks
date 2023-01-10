import '../../assets/css/post-modal.css';
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostById } from '../../store/slice/PostsSlice.js';

interface ModalProps {
    visible: boolean;
    title: string;
    content: ReactElement | string;
    footer: ReactElement | string;
    onClose: () => void;
}

const Modal = ({
    visible = false,
    title = '',
    content = '',
    footer = '',
    onClose
}: ModalProps) => {
    const onKeydown = ({ key }: KeyboardEvent) => {
        if (key === 'Escape') {
            onClose();
        }
    };
    
    React.useEffect(() => {
        document.addEventListener('keydown', onKeydown);
        return () => document.removeEventListener('keydown', onKeydown);
    });
    
    if (!visible) {
        return null;
    }
    
    return <div className='modal' onClick={ onClose }>
        <div className='modal-dialog' onClick={ e => e.stopPropagation() }>
            <div className='modal-header'>
                <h3 className='modal-title'>{ title }</h3>
                <span className='modal-close' onClick={ onClose }>
            &times;
          </span>
            </div>
            <div className='modal-body'>
                <div className='modal-content'>{ content }</div>
            </div>
            { footer && <div className='modal-footer'>{ footer }</div> }
        </div>
    </div>;
};

export const Post = ({ postInfo }) => {
    const dispatch = useDispatch();
    const { post } = useSelector(state => state.postsReducer);
    
    const [isModal, setModal] = React.useState(false);
    const onClose = () => setModal(false);
    
    const getInfoById = (id) => {
        dispatch(getPostById(id));
    };
    
    return (
        <>
            <h1>{ postInfo.title }</h1>
            <button onClick={ () => {
                getInfoById(postInfo.id);
                setModal(true);
            } }>more info
            </button>
            <p>-------------------------</p>
            <Modal
                visible={ isModal }
                title={ post.title }
                content={ <p>{ post.body }</p> }
                footer={ <button onClick={ onClose }>Закрыть</button> }
                onClose={ onClose }
            />
        </>
    );
};
