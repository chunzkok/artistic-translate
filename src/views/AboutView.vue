<template>
  <div class="py-sm-5 about text-center">
    <div class="py-3">
      <h1>About Me</h1>
      <img
        alt="Kok Chun Zhi"
        src="../assets/kokchunzhi.jpeg"
        class="rounded-circle p-3"
      />
      <p class="px-5">
        Hello! I'm Kok Chun Zhi, a Year 2 Computer Science student studying at
        the National University of Singapore.
      </p>
    </div>

    <div>
      <h1>Acknowledgements</h1>
      <span>
        <ul>
          <li>
            <a
              href="https://www.flaticon.com/free-icons/drawing"
              title="website logo"
            >
              Website logo created by monkik - Flaticon
            </a>
          </li>
          <li>
            <a href="https://www.artic.edu/" title="">
              Images provided by Art Institute of Chicago
            </a>
          </li>
        </ul>
      </span>
    </div>
  </div>
  <div></div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
