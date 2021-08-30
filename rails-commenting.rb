# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)Controller, this is where you put the logic for interaction between user, views and model. The index method creates an Active Record call that will save all the content from the db as an instance variable.
class BlogPostsController < ApplicationController
  def index
    # ---2)Returns all blog posts
    @posts = BlogPost.all
  end

  def show
    # ---3)Returns the blog post at the specific id passed in as an argument. Show uses an Active Record call that will find one item by id which comes from params.
    @post = BlogPost.find(params[:id])
  end

  # ---4) Returns a form that allows the user to create a new blog post, New allows users to add information to a form which is then stored in the db.
  def new
    @post = Post.new
  end

  def create
    # ---5) Creates new blog post and evaluates whether it meets params, then redirects accordingly. Create submits user data to the db.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) Returns blog post which corresponds to argument passed in as id, and form to allow user to make changes to the post.
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Post retrieved and updated, evaluated for validity, redirects accordingly
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) if post was not destroyed this redirects back to post. Delete removes content.
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Private is a Ruby keyword that restricts scope, this ensures that what falls below cannot be called from anywhere else in the program. 
  private
  def blog_post_params
    # ---10)The hash requires for the parameters title and content to be present, and for blog posts that meet those params to be added to the db.
    params.require(:blog_post).permit(:title, :content)
  end
end
