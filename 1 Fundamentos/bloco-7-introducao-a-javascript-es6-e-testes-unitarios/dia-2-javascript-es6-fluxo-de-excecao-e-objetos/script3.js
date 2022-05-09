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

  const addKey = (object, key, value) => {
    object[key] = value;
  }

  const listKey = (object) => Object.keys(object);

  const objectSize = (object) => Object.keys(object).length;

  const objectValue = (object) => Object.values(object);

  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

  const numberStudents = (object) => {
    const keys = Object.keys(object)
    let soma = 0;
      for (index in keys){
        soma += object[keys[index]].numeroEstudantes;
      }
      return soma;
  }

function getValueByNumber(object, index) {
    const keys = Object.values(object);
    return keys[index];
}

const verifyPair = (obj, key, value) => {
    const arr = Object.entries(obj);
    let isEqual = false;
    for (let index in arr) {
      if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
    }
    return isEqual;
  };
