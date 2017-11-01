package entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import security.IUser;
import security.PasswordStorage;

@Entity(name = "SEED_PLACE")
public class Place implements IUser, Serializable{

    @Id
    @Column(length = 30, name = "PLACE_NAME")
    private String placeName;
    private String address;
    private String gps;
    private String description;
    private int rating;
    private String imageUri;
    
    
    
    
  public Place() {
  }

    public Place(String placeName, String address, String description, int rating, String imageUri)
    {
        this.placeName = placeName;
        this.address = address;
        this.description = description;
        this.rating = rating;
        this.imageUri = imageUri;
    }

    public String getPlaceName()
    {
        return placeName;
    }

    public String getAddress()
    {
        return address;
    }

    public String getGps()
    {
        return gps;
    }

    public String getDescription()
    {
        return description;
    }

    public int getRating()
    {
        return rating;
    }

    public String getImageUri()
    {
        return imageUri;
    }

    public void setGps(String gps)
    {
        this.gps = gps;
    }

    public void setRating(int rating)
    {
        this.rating = rating;
    }

    public void setImageUri(String imageUri)
    {
        this.imageUri = imageUri;
    }
    
    
}