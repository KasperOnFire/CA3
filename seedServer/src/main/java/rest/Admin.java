package rest;

import com.google.gson.ExclusionStrategy;
import com.google.gson.FieldAttributes;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import entity.Role;
import facades.UserFacade;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import javax.annotation.security.RolesAllowed;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import entity.User;

@Path("demoadmin")
@RolesAllowed("Admin")
public class Admin {

    private static Gson gson = new GsonBuilder().setPrettyPrinting().setExclusionStrategies(new ExclusionStrategy() {
        @Override
        public boolean shouldSkipClass(Class<?> cl) {
            return (cl == Role.class);
        }

        @Override
        public boolean shouldSkipField(FieldAttributes f) {
            return false;
        }
    }).create();
    private EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu_development");
    private UserFacade uf = new UserFacade(emf);

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getSomething() {
        String now = new SimpleDateFormat("MM-dd-yyyy HH:mm:ss").format(new Date());
        return "{\"message\" : \"Hello Admin from server (call accesible by only authenticated ADMINS)\",\n" + "\"serverTime\": \"" + now + "\"}";
    }

    @GET
    @Path("getAll")
    @Produces(MediaType.APPLICATION_JSON)
    public String getAllUsers() {
        List<User> users = uf.getAllUsers();
        String result = gson.toJson(users);
        System.out.println(result);
        return result;
    }

}
