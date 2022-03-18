import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id:0, "nombre":"Afonso Suárez, María Dolores","despacho":"s7","teléfono":"(928) 45 87 27","correo":"marilola.afonso@ulpgc.es"},
      {id:1, "nombre":"Alayón Hernández, Francisco","despacho":"d3-12 ","teléfono":"(928) 45 87 56","correo":" francisco.alayon@ulpgc.es"},
      {id:2, "nombre":"Alemán Flores, Miguel","despacho":"d1-4","teléfono":" (928) 45 87 04","correo":" miguel.aleman@ulpgc.es"},
      {id:3, "nombre":"Álvarez León, Luis","despacho":"d1-9","teléfono":" (928) 45 45 63","correo":" lalvarez@ulpgc.es"},
      {id:4, "nombre":" Benítez Díaz, Domingo","despacho":"d3-6","teléfono":" (928) 45 45 66","correo":" domingo.benitez@ulpgc.es"},
      {id:5, "nombre":"Cabrera Gámez, Jorge","despacho":"s9","teléfono":" (928) 45 87 47","correo":" jorge.cabrera@ulpgc.es"},
      {id:6, "nombre":"Carmona Duarte, María Cristina","despacho":"d2-9","teléfono":" (928) 45 87 34","correo":" cristina.carmona@ulpgc.es"},
      {id:7, "nombre":"Carreras Riudavets, Francisco Javier","despacho":"s7","teléfono":" (928) 45 87 29","correo":" francisco.carreras@ulpgc.es"},
      {id:8, "nombre":" Castrillón Santana, Modesto F.","despacho":"d1-7","teléfono":" (928) 45 87 55","correo":" modesto.castrillon@ulpgc.es"},
      {id:9, "nombre":"Correas Suárez, Beatriz","despacho":"d2-14","teléfono":" (928) 45 98 59","correo":" beatriz.correas@ulpgc.es"},
      {id:10, "nombre":"Cuenca Hernández, Carmelo","despacho":"d2-13","teléfono":" (928) 45 87 37","correo":" carmelo.cuenca@ulpgc.es"},
      {id:11, "nombre":"de Blasio García, Gabriel","despacho":"d3-2","teléfono":" (928) 45 87 42","correo":" gabriel.deblasio@ulpgc.es"},
      {id:12, "nombre":"Domínguez Brito, Antonio","despacho":"d1-8","teléfono":" (928) 45 45 72","correo":" antonio.dominguez@ulpgc.es"},
      {id:13, "nombre":"Doreste Blanco, Luis","despacho":"d1-6","teléfono":" (928) 45 87 06","correo":" luis.doreste@ulpgc.es"},
      {id:14, "nombre":"Duque Martín de Oliva, Juan de Dios","despacho":"d2-11","teléfono":" (928) 45 87 35","correo":" juandedios.duque@ulpgc.es"},
      {id:15, "nombre":"Esclarín Monreal, Julio","despacho":"s3","teléfono":" (928) 45 87 09","correo":" julio.esclarin@ulpgc.es"},
      {id:16, "nombre":"Falcón Martel, Antonio","despacho":"d3-5","teléfono":" (928) 45 87 28","correo":" antonio.falcon@ulpgc.es"},
      {id:17, "nombre":"Fernández García, Enrique","despacho":"d2-1","teléfono":" (928) 45 87 21","correo":" enrique.fernandez@ulpgc.es"},
      {id:18, "nombre":"Fernández López, Pablo Carmelo","despacho":"No asignado","teléfono":" (928) No tiene telefono xd","correo":" pablo.fernandezlopez@ulpgc.es"},
      {id:19, "nombre":"Fortes Gálvez, José ","despacho":"d2-4","teléfono":" (928) 45 87 24","correo":" fortesdis@ulpgc.es"},
      {id:20, "nombre":"Freire Obregón, David Sebastián","despacho":"s10","teléfono":" (928) ","correo":" david.freire@ulpgc.es"},
      {id:21, "nombre":"García Quesada, Jesús","despacho":"d2-3","teléfono":" (928) 45 87 23 ","correo":"jesus.garcia@ulpgc.es"},
      {id:22, "nombre":"García Rodríguez, Carmelo Rubén","despacho":"d3-9","teléfono":" (928) 45 87 53 / 45 86 51 (Director)","correo":" ruben.garcia@ulpgc.es"},
      {id:23, "nombre":"González Domínguez, José Daniel","despacho":"s8","teléfono":" (928) 45 87 51","correo":" josedaniel.gonzalez@ulpgc.es"},
      {id:24, "nombre":"González Muñoz, Carlos","despacho":"d1-1","teléfono":" (928) 45 87 01 ","correo":"carlos.gonzalez@ulpgc.es"},
      {id:25, "nombre":"González Sánchez, María Esther","despacho":" s3","teléfono":" (928) 45 87 09","correo":" esther.gonzalez@ulpgc.es"},
      {id:26, "nombre":"Guerra Artal, Cayetano","despacho":" d3-3","teléfono":" (928) 45 87 43","correo":" cayetano.guerra@ulpgc.es"},
      {id:27, "nombre":"Hernández Cabrera, José Juan","despacho":" d3-8","teléfono":" (928) 45 87 52","correo":" josejuan.hernandez@ulpgc.es"},
      {id:28, "nombre":"Hernández Figueroa, Zenón","despacho":" d2-8","teléfono":" (928) 45 87 32","correo":" zenon.hernandez@ulpgc.es"},
      {id:29, "nombre":"Hernández Sosa, José Daniel","despacho":" d1-1","teléfono":" (928) 45 87 01","correo":" daniel.hernandez@ulpgc.es"},
      {id:30, "nombre":"Hernández Tejera, Francisco Mario","despacho":" d3-4","teléfono":" (928) 45 87 44","correo":" mario.hernandez@ulpgc.es"},
      {id:31, "nombre":"Lorenzo Navarro, José Javier","despacho":" s9","teléfono":" (928) 45 87 47","correo":" javier.lorenzo@ulpgc.es"},
      {id:32, "nombre":"Marrero Cáceres, Sonia","despacho":" s5 ","teléfono":"(928) 45 87 03","correo":" sonia.marrero@ulpgc.es"},
      {id:33, "nombre":"Mayor González, Octavio","despacho":" d2-10","teléfono":" (928) 45 87 30","correo":" octavio.mayor@ulpgc.es"},
      {id:34, "nombre":"Medina Rodríguez, Pedro","despacho":" d2-2","teléfono":" (928) 45 87 22","correo":" pedro.medina@ulpgc.es"},
      {id:35, "nombre":"Méndez Babey, Máximo","despacho":" d1-2","teléfono":" (928) 45 87 02","correo":" maximo.mendez@ulpgc.es"},
      {id:36, "nombre":"Monzón López, Nelson","despacho":" s2","teléfono":" (928) 45 87 10","correo":" nelson.monzon@ulpgc.es"},
      {id:37, "nombre":"Muñoz Blanco, José Antonio","despacho":" d3-10","teléfono":" (928) 45 87 54 ","correo":"joseantonio.munoz@ulpgc.es"},
      {id:38, "nombre":"Ocón Carreras, Antonio","despacho":" CICEI","teléfono":" (928) 45 10 45","correo":" antonio.ocon@ulpgc.es"},
      {id:39, "nombre":"Ortega Zamorano, Francisco","despacho":" d2-9","teléfono":" (928) 45 87 34","correo":" francisco.zamorano@ulpgc.es"},
      {id:40, "nombre":"Padrón Morales, Gabino","despacho":" d3-7 ","teléfono":"(928) 45 44 72","correo":" gabino.padron@ulpgc.es"},
      {id:41, "nombre":"Peñate Sánchez, Adrián","despacho":" d2-15","teléfono":" (928) 45 44 13","correo":" adrian.penate@ulpgc.es"},
      {id:42, "nombre":"Pérez Aguiar, José Rafael","despacho":" d2-7","teléfono":" (928) 45 87 31","correo":" jose.perez@ulpgc.es"},
      {id:43, "nombre":"Pérez Aguiar, Miguel Angel","despacho":" d3-1","teléfono":" (928) 45 87 41","correo":" miguelangel.perez@ulpgc.es"},
      {id:44, "nombre":"Pérez García, Ricardo","despacho":" d2-12","teléfono":" (928) 45 87 36","correo":" ricardo.perez@ulpgc.es"},
      {id:45, "nombre":"Plácido Castro, Ana María","despacho":" s1","teléfono":" (928) 45 87 07","correo":" anamaria.placido@ulpgc.es"},
      {id:46, "nombre":"Quesada Arencibia, Alexis","despacho":" d1-8","teléfono":" (928) 45 45 72","correo":" alexis.quesada@ulpgc.es"},
      {id:47, "nombre":"Quevedo Losada, Juan Carlos","despacho":" d3-13","teléfono":" (928) 45 87 57","correo":" juancarlos.quevedo@ulpgc.es"},
      {id:48, "nombre":"Quintana Domínguez, Francisca","despacho":" s5","teléfono":" (928) 45 87 03","correo":" francisca.quintana@ulpgc.es"},
      {id:49, "nombre":"Rodríguez Barrera, Eduardo Miguel","despacho":" s10","teléfono":" (928) 45 98 62","correo":" eduardo.rodriguez@ulpgc.es"},
      {id:50, "nombre":"Rodríguez del Pino, Juan Carlos","despacho":" s8","teléfono":" (928) 45 87 33","correo":" jc.rodriguezdelpino@ulpgc.es"},
      {id:51, "nombre":"Rodríguez Rodríguez, José Carlos","despacho":" No asignado","teléfono":" (928)","correo":" @"},
      {id:52, "nombre":"Salgado de la Nuez, Agustín","despacho":"d1-5","teléfono":"(928) 45 87 05","correo":" agustin.salgado@ulpgc.es"},
      {id:53, "nombre":"Sánchez Medina, Javier Jesús","despacho":" CICEI","teléfono":" (928) 45 10 45","correo":"javier.sanchez@ulpgc.es"},
      {id:54, "nombre":"Sánchez Pérez, Javier","despacho":" s2 ","teléfono":"(928) 45 87 10","correo":" jsanchez@ulpgc.es"},
      {id:55, "nombre":"Santana Jaria, Oliverio Jesús","despacho":" d1-3","teléfono":" (928) 45 87 45","correo":" oliverio.santana@ulpgc.es"},
      {id:56, "nombre":"Santana Pérez, Francisco José","despacho":" d2-6","teléfono":" (928) 45 87 26","correo":" fran.santana@ulpgc.es"},
      {id:57, "nombre":"Santos Espino, José Miguel","despacho":" s6","teléfono":" (928) 45 87 83","correo":" josemiguel.santos@ulpgc.es"},
      {id:58, "nombre":"Suárez Araujo, Carmen Paz","despacho":" d2-5","teléfono":" (928) 45 87 25","correo":" carmenpaz.suarez@ulpgc.es"},
      {id:59, "nombre":"Trujillo Pino, Agustín","despacho":" s6","teléfono":" (928) 45 87 50","correo":" agustin.trujillo@ulpgc.es"}
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}