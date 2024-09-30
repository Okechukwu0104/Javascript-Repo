import java.util.Scanner;

public class show{
public static void main(String args[]){

System.out.println(" ");

System.out.print("* Hello...What's your name? * ");
Scanner userInput = new Scanner(System.in);
String name = userInput.nextLine();
System.out.println(" ");


System.out.println("  Hi "+name+", My name is THE COMPUTER. \n   Ive been helping your uncle to learn programming.");

System.out.println(" ");
System.out.println("Would you like to learn to make computers ? ");
String response = userInput.nextLine();



if(response.equals("yes")){System.out.println("That is nice\nYour uncle can teach you how to make computers. \nYou will do great ! ");
String occupation = "Programmer";
System.out.println(" ");


System.out.println(" ");


System.out.println("Bye "+name+"  Know that I am still watching to see you become a Great SOFTWARE ENGINEER");
}



if(response.equals("no")){
System.out.print("why?");
String rubbish = userInput.nextLine();
System.out.print("ok.. thats a good reason. welldone "+ name );

System.out.println(" ");

System.out.println(" So what do you want to be in future? ");
String otheroccupation = userInput.nextLine();

System.out.println(" ");

System.out.println("  Woow!...that is beautiful "+" \nIf i were human i would love to be a "+otheroccupation+" too.");


}











}


}