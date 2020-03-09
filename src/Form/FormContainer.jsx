import React from 'react';
import { Formik, Field, Form } from "formik";

const Fragment=React.Fragment;

export default function FormContainer(props){

let onSubmitHandle=(values)=>{
		let newArticle={title:values.title,
	  				 	body:values.body,
	  				 	tags:values.tags.split(', ')
	  				   }
		props.handleAddPost(newArticle);
	}
return (
		<Fragment>
		    <Formik
		      //---инициализируем значения input-ов
		      initialValues={{title: "",body: "",tags: ""}}
		      //--- validation 
		      validate={values => {
		        const errors = {};
		        //---  убираем пробелы
				values.title=values.title.trim();
				values.body=values.body.trim();
				values.tags=values.tags.trim();
		        
		        if(!values.title) {errors.title = 'Поле нужно заполнить!';} 
		        else if(values.title.length>50) {errors.title = 'Должно быть не более 50 знаков!';}
		        if(!values.body) {errors.body = 'Поле нужно заполнить!';}
		        else if(values.body.length>150) {errors.body = 'Должно быть не более 150 знаков!';}
		        if(!values.tags) {errors.tags = 'Поле нужно заполнить!';}
		        else if(values.tags.length>50) {errors.tags = 'Должно быть не более 50 знаков!';}
		        return errors;
		      }}
		      //--- определяем, что будет происходить при вызове onsubmit
		      onSubmit={(values,{resetForm}) => {onSubmitHandle(values); resetForm();}}>

		      {({ errors, touched }) => (
		      	//---свойство, где описывыем нашу форму
		      	//---errors-ошибки валидации формы
		      	//---touched-поля формы, которые мы "затронули",
		      	//---то есть, в которых что-то ввели
		      	<div id="post-add" className="col-lg-4">
		        <Form>
			        <div className="form-group">
			          <Field name="title" placeholder="Заголовок" type="text" className="form-control"/>
			          {//---если в этом поле возникла ошибка и 
			          //---если это поле "затронуто, то выводим ошибку
			            errors.title &&
			            touched.title && 
			            	<div className="text-danger text-left bg-danger error">{errors.title}</div>}
			        </div>
			        <div className="form-group">
			          <Field name="body" placeholder="текст" type="text" className="form-control"/>
			          {errors.body &&
			            touched.body && (
			            	<div className="text-danger text-left bg-danger error">{errors.body}</div>
			            )}
		            </div>
		            <div className="form-group">
			          	<Field name="tags" placeholder="тег, ещё тег" type="text" className="form-control"/>
			         	 {errors.tags &&
			            	touched.tags && (
			            	<div className="text-danger text-left bg-danger error">{errors.tags}</div>
			            )}
		            </div>
		         <button type="submit" className="btn btn-primary">Добавить</button>
		        </Form>
		        </div>
		      )}

		    </Formik>
		</Fragment>
  );
}


