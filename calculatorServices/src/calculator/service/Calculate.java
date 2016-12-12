package calculator.service;

import javax.jws.WebService;

@WebService
public class Calculate {
	public String add(String num1, String num2){
		String out = "";
		try{
			Float number1 = Float.parseFloat(num1);
			Float number2 = Float.parseFloat(num2);
			Float output = number1 + number2;
			out = out + output;
		}catch(Exception ex){
			ex.printStackTrace();
		}
		
		return out;
	}
	
	public String subtract(String num1, String num2){
		String out = "";
		try{
			Float number1 = Float.parseFloat(num1);
			Float number2 = Float.parseFloat(num2);
			Float output = number1 - number2;
			out = out + output;
		}catch(Exception ex){
			ex.printStackTrace();
		}
		
		return out;
	}
	
	public String multiply(String num1, String num2){
		String out = "";
		try{
			Float number1 = Float.parseFloat(num1);
			Float number2 = Float.parseFloat(num2);
			Float output = number1 * number2;
			out = out + output;
		}catch(Exception ex){
			ex.printStackTrace();
		}
		
		return out;
	}
	
	public String divide(String num1, String num2){
		String out = "";
		try{
			Float number1 = Float.parseFloat(num1);
			Float number2 = Float.parseFloat(num2);
			Float output = number1 / number2;
			out = out + output;
		}catch(Exception ex){
			ex.printStackTrace();
		}
		
		return out;
	}
}
