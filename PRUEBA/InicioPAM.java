// libreria para utilizar el scanner
import java.util.Scanner;

public class InicioPAM {
    //metodo
    public void reglasPOO() {
        System.out.println("Reglas de la programación orientada a objetos:");
        System.out.println("1.- Clases y objetos");
        System.out.println("2.- Encapsulamiento");
        System.out.println("3.- Herencia");
        System.out.println("4.- Polimorfismo");
        System.out.println("5.- Abstracción");
    }

    //metodo
    public void lineamientosClassroom() {
        System.out.println("Lineamientos de clase:");
        System.out.println("1.- Los trabajos se deben entregar en classroom de manera individual");
        System.out.println("2.- Los trabajos se deben entregar en tiempo y forma");
        System.out.println("3.- Utilizar el correo institucional para trabajar en la plataforma");
        System.out.println("4.- Cualquier entrega debe ser en PDF");
    }

    //metodo
    public void fechasParciales() {
        System.out.println("Fechas de parciales:");
        System.out.println("Primer parcial: 29-09-25"); 
        System.out.println("Segundo parcial: 03-10-25");
        System.out.println("Tercer parcial: 01-12-25");
        System.out.println("Examen final: 08-12-25");
    }

    //metodo
    public void porcentajes1() {
        System.out.println("Parcial 1:");
        System.out.println("Evidencia desempeño    40%");
        System.out.println("Evidencia producto     20%");
        System.out.println("Evidencia conocimiento 30%");
        System.out.println("Proyecto integrador    10%");
    }

    //metodo
    public void porcentajes2() {
        System.out.println("Parcial 2:");
        System.out.println("Evidencia desempeño    40%");
        System.out.println("Evidencia producto     20%");
        System.out.println("Evidencia conocimiento 20%");
        System.out.println("Proyecto integrador    20%");
    }

    //metodo
    public void porcentajes3() {
        System.out.println("Parcial 3:");
        System.out.println("Evidencia desempeño    20%");
        System.out.println("Evidencia producto     10%");
        System.out.println("Evidencia conocimiento 40%");
        System.out.println("Proyecto integrador    30%");
    }

    //metodo main donde inicia el codigo
    public static void main(String[] args) {
        //incializamos el scanner
        Scanner read = new Scanner(System.in);
        // se crea un objeto llamado inicio usando la clase InicioPAM
        InicioPAM inicio = new InicioPAM();

        System.out.println("Elige una de las siguientes opciones:");
        System.out.println("1.- Reglas de POO");
        System.out.println("2.- Lineamientos de Classroom");
        System.out.println("3.- Fechas de parciales");
        System.out.println("4.- Porcentajes");
        int opc = read.nextInt();

        switch(opc){
            case 1:
                inicio.reglasPOO();
                break;
            case 2:
                inicio.lineamientosClassroom();
                break;
            case 3:
                inicio.fechasParciales();
                break;
            case 4:
                System.out.println("Qué porcentajes quieres observar:");
                System.out.println("1.- Primer parcial");
                System.out.println("2.- Segundo parcial");
                System.out.println("3.- Tercer parcial");

                int parcial = read.nextInt();

                switch(parcial) {
                    case 1: inicio.porcentajes1(); break;
                    case 2: inicio.porcentajes2(); break;
                    case 3: inicio.porcentajes3(); break;
                    default: System.out.println("ERROR: Parcial no válido"); break;
                }
                break;
                default:
                System.out.println("ERROR: Opción no válida");
                break;    
        }
        read.close();
    }
}
