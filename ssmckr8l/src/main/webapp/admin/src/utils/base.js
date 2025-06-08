const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmckr8l/",
            name: "ssmckr8l",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmckr8l/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "个人博客网站"
        } 
    }
}
export default base
