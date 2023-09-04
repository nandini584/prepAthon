const router = require("express").Router();
const passport = require("passport");

router.get("/login/success", (req, res) => {
    if(req.user){
        res.status(200).json({
            success: true,
            message: "user has successfully authenticated.",
            user: req.user,
            cookies: req.cookies,
        });
    }else{
        res.status(403).json({
            success: false,
            message: "user failed to authenticate.",
        })
    }
})
router.get("/login/failed", (req, res) => {
    res.status(401).json({
        success: false,
        message: "user failed to authenticate.",
    });
})
router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: process.env.GOOGLE_CLIENT_URI,
        failureRedirect: "/login/failed",
    })
    );

    router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
    router.get('/logout', (req, res) => {
        req.session = null;
        req.logout();
        res.redirect(process.env.GOOGLE_CLIENT_URI);
    })

    module.exports = router;