<template>
    <div class="section-padding bg-light">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-title" data-aos="fade-up" data-aos-delay="300">
                        <h2 class="title">Our Team</h2>
                    </div>
                </div>
            </div>
            <div class="row mtn-30">
                <div class="col-lg-4 col-md-6 mt-30" data-aos="fade-up" data-aos-delay="300" v-for="(member, index) in members" :key="index">
                    <SingleTeamMember :member="member" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            SingleTeamMember: () => import('@/components/SingleTeamMember'),
        },
        data() {
            return {
                members: [
                    {
                        name: "Edward Eric",
                        position: "CEO Founder",
                        imgSrc: "/images/team/team-1.jpg",
                        socials: [
                            {
                                icon: "icofont-twitter",
                                url: "https://twitter.com/"
                            },
                            {
                                icon: "icofont-facebook",
                                url: "https://www.facebook.com/"
                            },
                            {
                                icon: "icofont-instagram",
                                url: "https://www.instagram.com/"
                            },
                            {
                                icon: "icofont-linkedin",
                                url: "https://www.linkedin.com/"
                            }
                        ]
                    },
                    {
                        name: "Tom Holland",
                        position: "Architect & Project Management",
                        imgSrc: "/images/team/team-2.jpg",
                        socials: [
                            {
                                icon: "icofont-twitter",
                                url: "https://twitter.com/"
                            },
                            {
                                icon: "icofont-facebook",
                                url: "https://www.facebook.com/"
                            },
                            {
                                icon: "icofont-instagram",
                                url: "https://www.instagram.com/"
                            },
                            {
                                icon: "icofont-linkedin",
                                url: "https://www.linkedin.com/"
                            }
                        ]
                    },
                    {
                        name: "Laura Erakovic",
                        position: "Executive & Marketing Management",
                        imgSrc: "/images/team/team-3.jpg",
                        socials: [
                            {
                                icon: "icofont-twitter",
                                url: "https://twitter.com/"
                            },
                            {
                                icon: "icofont-facebook",
                                url: "https://www.facebook.com/"
                            },
                            {
                                icon: "icofont-instagram",
                                url: "https://www.instagram.com/"
                            },
                            {
                                icon: "icofont-linkedin",
                                url: "https://www.linkedin.com/"
                            }
                        ]
                    }
                ]
            }
        },
    };
</script>