package rest;

import javax.annotation.security.PermitAll;
import javax.annotation.security.RolesAllowed;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("places")
@RolesAllowed("User")
public class Place {
  
  @GET
  @Produces(MediaType.APPLICATION_JSON)
  public String getSomething(){
    return "{\"message\" : \"Hello User from Server (All can see this)\"}"; 
  }
 
}
