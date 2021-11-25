<template>
    <div>
            <div class="d-md-none nav-bar">
                <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                            <router-link class="navbar-brand" :to="{ name: 'dashboard-home'}">
                                <img src="../assets/icons/enyata-logo.svg" />
                            </router-link>
                        <div class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <div class="open-slide">
                                <img class="side-bar-hamburger" src="../assets/icons/hamburger-colored.png" alt="hamburger" />
                            </div>
                        </div>

                        <div class="d-md-none collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

                                <div class="side-bar-top">
                                    <img class="profile-img" src="../assets/icons/profile-dp.svg" alt="profile-img">

                                    <p class="admin-name text-center">Jane Doe</p>
                                    <p class="admin-mail text-center">doe@enyata.com</p>
                                </div>
                                <li class="nav-item">
                                    <div class="side-bar-info">
                                        <div class="dashboard-menus">
                                            <router-link class="dashboard-link" :to="{ name: 'dashboard-home'}">
                                                <img class="dashboard-img" src="../assets/icons/dashboard-icon.svg" alt="dashboard"/>
                                                <span class="dashboard-menu">Dashboard</span>
                                            </router-link>
                                        </div>

                                        <div class="dashboard-menus">
                                            <router-link class="dashboard-link" :to="{ name: 'create-application' }">
                                                <img class="dashboard-img" src="../assets/icons/create-application-icon.svg" alt="create"/>
                                                <span class="dashboard-menu">Create Application</span>
                                            </router-link>
                                        </div>

                                        <div class="dashboard-menus">
                                            <router-link class="dashboard-link" :to="{ name: 'application-entries' }">
                                                <img class="dashboard-img" src="../assets/icons/application-entries-icon.svg" alt="create"/>
                                                <span class="dashboard-menu">Application Entries</span>
                                            </router-link>
                                        </div>

                                        <div class="dashboard-menus">
                                            <router-link class="dashboard-link" :to="{ name: 'compose-assessment' }">
                                                <img class="dashboard-img" src="../assets/icons/compose-assessment-icon.svg" alt="create"/>
                                                <span class="dashboard-menu">Compose Assessment</span>
                                            </router-link>
                                        </div>

                                        <div class="dashboard-menus">
                                            <router-link class="dashboard-link" :to="{ name: 'result' }">
                                                <img class="dashboard-img" src="../assets/icons/result-icon.svg" alt="create"/>
                                                <span class="dashboard-menu">Result</span>
                                            </router-link>
                                        </div>

                                        <div class="dashboard-menus">
                                            <router-link class="dashboard-link" :to="{ name: 'settings' }">
                                                <img class="dashboard-img" src="../assets/icons/settings-icon.svg" alt="create"/>
                                                <span class="dashboard-menu">Settings</span>
                                            </router-link>
                                        </div>

                                        <div class="logout-menus">
                                            <img class="logout-img" src="../assets/icons/logout-icon.svg" alt="logout"/>
                                            <span class="logout-menu">Log Out</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="side-bar d-none d-md-block">
                <div class="side-bar-top">
                    <img class="side-bar-profile-img" src="../assets/icons/profile-dp.svg" alt="profile-img">

                    <p class="admin-name text-center">Jane Doe</p>
                    <p class="admin-mail text-center">doe@enyata.com</p>
                </div>
                
                <div class="side-bar-info">
                        <div class="dashboard-menus">
                            <router-link class="dashboard-link" :to="{ name: 'dashboard-home'}">
                                <img class="dashboard-img" src="../assets/icons/dashboard-icon.svg" alt="dashboard"/>
                                <span class="dashboad-menu">Dashboard</span>
                            </router-link>
                        </div>

                   <div class="dashboard-menus">
                        <router-link class="dashboard-link" :to="{ name: 'create-application' }">
                            <img class="dashboard-img" src="../assets/icons/create-application-icon.svg" alt="create"/>
                            <span class="dashboard-menu">Create Application</span>
                        </router-link>
                    </div>

                    <div class="dashboard-menus">
                        <router-link class="dashboard-link" :to="{ name: 'application-entries' }">
                            <img class="dashboard-img" src="../assets/icons/application-entries-icon.svg" alt="create"/>
                            <span class="dashboard-menu">Application Entries</span>
                        </router-link>
                    </div>

                    <div class="dashboard-menus">
                        <router-link class="dashboard-link" :to="{ name: 'compose-assessment' }">
                            <img class="dashboard-img" src="../assets/icons/compose-assessment-icon.svg" alt="create"/>
                            <span class="dashboard-menu">Compose Assessment</span>
                        </router-link>
                    </div>

                    <div class="dashboard-menus">
                        <router-link class="dashboard-link" :to="{ name: 'result' }">
                            <img class="dashboard-img" src="../assets/icons/result-icon.svg" alt="create"/>
                            <span class="dashboard-menu">Result</span>
                        </router-link>
                    </div>

                    <div class="dashboard-menus">
                        <router-link class="dashboard-link" :to="{ name: 'settings' }">
                            <img class="dashboard-img" src="../assets/icons/settings-icon.svg" alt="create"/>
                            <span class="dashboard-menu">Settings</span>
                        </router-link>
                    </div>

                    <div class="logout-menus">
                        <img class="logout-img" src="../assets/icons/logout-icon.svg" alt="logout"/>
                        <span class="logout-menu">Log Out</span>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar'
}
</script>
