/**
 * Created by fisa on 12/10/15.
 */
import Controller from 'trinity/Controller';

export default class IndexController extends Controller {
    indexAction($scope){
        //Get request
        let request = this.request;
        document.getElementById('content').innerHTML = JSON.stringify(request);

        // $scope object is global object accessible almost everywhere
        // you can access those via console typing just App.$scope
        // Give it a try!
        $scope.foo = 'Hello ';
        $scope.bar = 'world!';

        let bundleText = document.getElementById('bundleText');
        if(window.uncomented){
            bundleText.innerHTML = "Congratulation! as you can see your application is loading faster\n" +
                "This is because whole trinity framework is bundled inside one file - less requests => more speed\n" +
                "Uncommented code defines what files are included inside trinity.bundle file.\n" +
                "However, writing it this way sucks, so remove inline scripting (second uncomented script tag),\n" +
                "and look into config.js file - uncomment same code there and viola, it works just as fine.\n" +
                "For more information about bundling please visit following url about " +
                "<a href='https://github.com/jspm/jspm-cli/blob/master/docs/getting-started.md'>jspm</a>"
        } else {
            bundleText.innerHTML = "LOADED!\n " +
                "If you thing loading of app is too slow, let me introduce you bundling system..\n"
            + "Look into index.html file and uncomment two script tags"
        }
    }
}