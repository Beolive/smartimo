$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("IC1edtCczbRGWADVE35jBCuei3rkI5TfOcgZZOoz", "mV3pv0lB7TZxTGfavi1QgrHy848aggkY5xXPrr0i");
 
    var Blog = Parse.Object.extend("Blog");
    var Blogs = Parse.Collection.extend({ //Collection = liste des instances (objets) de la classe Blog
        model: Blog
    });

    var blogs = new Blogs(); //Instance de la collection Blogs, qui contient les différents blogs créés

    var BlogsView =  Parse.View.extend({
      template: Handlebars.compile($('#blogs-tpl').html()),
      render: function(){ 
          var collection = { blog: this.collection.toJSON() };
          this.$el.html(this.template(collection));
      }
    });

    blogs.fetch({
      success: function(blogs) {
          var blogsView = new BlogsView({ collection: blogs });
          blogsView.render();
          $('.main-container').html(blogsView.el);
      },
      error: function(blogs, error) {
          console.log(error);
      }
    });

});