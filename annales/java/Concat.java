import java.io.*;
import java.net.*; 
import java.util.*; 

public class Concat  {
    public static void main(String[] args) throws IOException {
		
    String total = "";
	FileInputStream fis = new FileInputStream(args[0]);
	BufferedReader in = new BufferedReader( new InputStreamReader(fis) );
	   
	String line = in.readLine();
	while (line != null) {
	    total += line; 
	    line = in.readLine(); 
	}
	System.out.println(total);
    }
}

    