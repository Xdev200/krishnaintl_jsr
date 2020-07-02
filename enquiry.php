    <!--<form class="col s12">-->
        <div class="row center">
            <div class="input-field col l6 m4 s12">
                <input id="name" type="text">
                <span id="name-err" class="red-text"></span>
              <label class="blue-text" for="name">Your Name</label>
            </div>
            
            <div class="input-field col l6 m4 s12">
              <input id="company" type="text">
              <span id="company-err" class="red-text"></span>
              <label class="blue-text" for="company">Company | Firm Name</label>
            </div>
        </div>
        
        <div class="row">
            <div class="input-field col l6 m4 s12">
              <input id="email" type="text">
              <span id="email-err" class="red-text"></span>
              <label class="blue-text" for="email">Email</label>
            </div>
            
              <div class="input-field col l6 m4 s12">
              <input id="contact" type="text">
              <span id="contact-err" class="red-text"></span>
              <label class="blue-text" for="contact">Contact</label>
            </div>
        </div>
        
        <div class="row">
            
            <div class="input-field col l6 m4 s12">
                <br><br> <span id="product-err" class="red-text"></span>
                    <select class="blue-text" name="product" id="product">
                      <option class="black-text"  value="" disabled selected>Choose Product Category</option>
                      <option  value="ALL">ALL</option>
                      <option value="hydraulic">HYDRAULIC</option>
                      <option value="pneumatic">PNEUMATIC</option>
                      <option value="earthmoving">EARTH MOVING</option>
                    </select>
                    
                    <!--<label>Product Category</label>-->
            </div>
            
            <div class="input-field col l6 m4 s12">
              <textarea id="message" class="materialize-textarea"></textarea>
              <span id="message-err" class="red-text"></span>
              <label class="blue-text" for="message">Your Message</label>
            </div>
        </div>
        
        <div class="row"  >
            <!--<span> <h4 class="center card" id="success-msg"></h4></span>-->
            <div class="col l12 m12 s12 center">
<!--                <br>-->
                <button class="btn btn-large logo white-text"  id="send-enquiry-btn">SEND YOUR ENQUIRY</button>
            </div>
        </div>
    <!--</form>-->