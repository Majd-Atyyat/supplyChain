import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


class CkEditor extends Component {
    render() {
        return (
            <>
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-xl-12 col-xxl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Form CkEditor</h4>
                                </div>
                                <div className="card-body custom-ekeditor">
                                    
                                    <CKEditor
                                        editor={ ClassicEditor }
                                    // data="<p>Hello from CKEditor 5!</p>"
                                        onReady={ editor => {
                                            // You can store the "editor" and use when it is needed.
                                            //console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            //console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            //console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            //console.log( 'Focus.', editor );
                                        } }
                                    />
                                </div>
                            </div>
                        </div>        
                    </div>        
                </div>
            </>
        );
    }
}

export default CkEditor;