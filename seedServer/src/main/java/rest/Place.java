package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import facades.PlaceFacade;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("places")
public class Place {
    
    
    private static Gson gson = new GsonBuilder().setPrettyPrinting().create();
    private static EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu_development");
    private PlaceFacade pf = new PlaceFacade(emf);
  
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public String getAll(){
     return gson.toJson(pf.getAllPlaces());
  }
 
}
