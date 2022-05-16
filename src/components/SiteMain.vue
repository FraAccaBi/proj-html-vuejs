<template>
  <div class="my-container">
    <section class="courses col-2-container">
      <div class="row pt-5">
        <div class="col-7 pe-4">
          <h2>
            Thousands of courses for any type of student
            </h2>
          <p>
            At EduPrime, it doesn't matter what domain you wish to sursue a caree in. Here you can find a course tha satisfies your needs within a click away and applies for a course in a matter of minutes. EduPrime is ranked as the most versatile university in the world, thanks to the number of courses it provides.
          </p>
          <button class="btn-yellow text-light ms-5 ">
            Browse through courses
          </button>
        </div>
        <div class="col-5">
          <img src="../../public/img/Graduation-Illustration.png" alt="">
        </div>
      </div>
    </section>
    <section class="faculties">
      <div class="text-center">
        <h2>
        Faculties available at EduPrime
      </h2>
      <p class="fs-6">
        A single university with a load of courses, tailored <br>
        to satisfy any student's needs.
      </p>
      </div>
      <div class="slider container">
        <div class="row row-cols-5">
          <div class="col box d-flex flex-column align-items-center box-active">
            <img src="../../public/img/Gavel-v2.png" alt="">
            <div class="title">
              Law faculty
            </div>

          </div>
          <div class="col box d-flex flex-column align-items-center ">
            <img src="../../public/img/Coins-tabs-v2.png" alt="">
            <div class="title">
              Economy
            </div>
          </div>
          <div class="col box d-flex flex-column align-items-center">
            <img src="../../public/img/Medicine-tabs-v2.png" alt="">
            <div class="title">
              Medicine
            </div>
          </div>
          <div class="col box d-flex flex-column align-items-center">
            <img src="../../public/img/Computer-tabs-v2.png" alt="">
            <div class="title">
              Computer Science
            </div>
          </div>
          <div class="col box d-flex flex-column align-items-center">
            <img src="../../public/img/Palette-tabs-v2.png" alt="">
            <div class="title">
              Graphic Design
            </div>    
          </div>
        </div>
      </div>
      <div class="law-example">
        <img src="" alt="">
        <div class="text-center">
          <h3>
            Law Faculty
          </h3>
          <p>
            Learning from world-leading academics and practitioners, you’ll not only receive an outstanding grounding in the theory of law, but you will be able to understand how those principles are applied in practice through a range of student-led activities and competitions.
          </p>
          <button class="btn-pink text-light">
            Read More
          </button>
        </div>
      </div>
      <div class="wave"></div>
    </section>
    <section class="uni-years">
        <h2>
          University Year
        </h2>
        <div class="col">Demo classes</div>
        <div class="col">Graduation Day</div>
        <div class="col">Orientation</div>
        <div class="col">Evaluation</div>
    </section>
    <section class="upcoming">
      <h2>
        Upcoming Events
      </h2>
      <div class="box">Coaching Sessions</div>  
      <div class="box">Coaching Sessions</div>
      <div class="box">Coaching Sessions</div>
      <button class="btn-yellow">
        View All Events
      </button>
    </section>
    <section class="latest">
      <h2>
        Latest Courses
      </h2>
      <div class="courses">
        <div class="course-box">
        <h5>
          Make Better Decisions
        </h5>

        </div>
        <div class="course-box">
          <h5>
            How to be a speaker
          </h5>
        </div>
        <div class="course-box">
          <h5>
            Network Introductions
          </h5>
        </div>
        <div class="course-box">
          <h5>
            Brand Management
          </h5>
        </div>
      </div>
      <h3>
        The most efficient examination method
      </h3>
      <p>
        EduPrime has gathered teachers from around the globe to brainstorm in order to facilitate the evaluation of our students. Every teacher from our university has an influence on how students are evaluated at his/her subject.
      </p>
      <button class="btn-pink">
        Discover the Method
      </button>
    </section>
    <section class="fees">
      <h2>
        Variable fees for international students
      </h2>
      <p>
        EduPrime has gathered teachers from around the globe to brainstorm in order to facilitate the evaluation of our students. Every teacher from our university has an influence on how students are evaluated at his/her subject.
      </p>
      <button class="btn-pink">
        List of Fees
      </button>
    </section>
    <section class="subscription">
      <h3>
        Subscribe now to Our Newsletter !
      </h3>
      <input type="text" placeholder="Email address...">
    </section>
    <section class="partners">
      <h3>
        Partners
      </h3>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SiteMain',
  props: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@/assets/scss/variables.scss";
@import "~@/assets/scss/style.scss";
.courses{
  height: 425px;
  .col-5>img{
    max-width: 400px;
  }
}
.faculties{
  height: 555px;
  .box{
    padding-top: 10px;
    height: 130px;
  }
  .box>img{
    width: 100px;
  }
  .box-active:hover{
    background-color: $bg-pink-transparent;
    
    color: $text-light;
    img{
      filter: brightness(3.5);
    }

  }
}
</style>
