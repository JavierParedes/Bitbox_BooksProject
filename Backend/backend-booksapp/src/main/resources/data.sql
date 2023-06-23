insert into books (name,itemcode,description,author,gender,price,state,supplier_id,creatiopricereduction ndate,creator_user_id) 
values ('El señor de los Anillos',000,'Libro de ficcion','Tolkiem','Ficcion',10,'ACTIVE',1,NOW(),1);

insert into users (name,surname,alias,password,email,address,rol) 
values ('Javier','Paredes','Jparvel','12345','javier.paredes@bitboxonline.com','Calle Lugo y Herrera', ADMIN);

insert into pricereduction (pricereduction,startdate,enddate) values('100',NOW(),'05/07/2023'.1);

insert into suppliers (name,address) values ('Agapea','Santa Cruz de Tenerife');