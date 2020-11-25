/*const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };
  

  const addProperties = (city, nationality, lastJob) => {
      customer.city = "Brazil";
      customer.nationality = "Brazilian";
      customer.lastJob = "Mechanic";
  }

  addProperties();
  console.log(customer);
///////
  const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

  const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for(i in arrayOfSkills){
      console.log(`${arrayOfSkills[i]}, Nível: ${student[arrayOfSkills[i]]}`);
    }
  };

  console.log(student2);
  ///////
  const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
  };

  const listSkillsWithValues = (student) => Object.values(student);
  console.log(listSkillsWithValues(student));

  ///////////
  const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  const pairKeyValue = Object.entries(países);
  console.log(pairKeyValue);

  for(i in pairKeyValue) {
    console.log('--------');
    console.log('Pais:', pairKeyValue[i][0]);
    console.log('Capital:', pairKeyValue[i][1]);
  };
  //////////
  const person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
  };
  
  const info = {
    age: 23,
    job: 'engenheiro',
  };
  
  const family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
  };
  
  Object.assign(person, info, family)
  console.log(person)*/    
//////////

/* Exercicio Part I */

const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, número ${order.address.number}, AP: ${order.address.apartment}`);
  }
  
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    order.order.pizza = {};
    order.order.pizza.calabresa = {amount: 1, price: 20};
    order.order.pizza.muzzarella = {amount: 1, price: 20};
    order.name = 'Luiz Silva';
    console.log(`Olá ${order.name}, o total do seu pedido de ${order.order.pizza}, ${order.order.pizza.calabresa} e ${order.order.drinks.coke.type} é R$${order.order.pizza.calabresa.price + order.order.pizza.muzzarella.price + order.order.drinks.coke.price}`);
}
  
  orderModifier(order);

  /* Exercicio Part II */

  const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  //Crie uma função para adicionar o turno da manhã na lesson2. 
  //Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
  /*const addPeriod = (obj, key, value) => {
    obj[key] = value;
    
  }
  addPeriod(lesson2, 'turno', 'manhã');
  console.log(lesson2);*/

  //Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
  const list = obj => {
      const arrayList = Object.keys(obj);
      for(i in arrayList) {
        console.log(`${arrayList[i]}`);
      }
  }
  list(lesson3);
  
  //Crie uma função para mostrar o tamanho de um objeto.
  const objLength = obj => Object.keys(obj).length;
  console.log(objLength(lesson3))

  //Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
  const objValues = obj => Object.values(obj);
  console.log(objValues(lesson3));

  //Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, 
  //sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

  console.log(allLessons);
  
  //Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
  const totalStudents = (obj) => Object.entries(obj);
  
  console.log(totalStudents(allLessons))
  