import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
    Userlistid,
    UserUpdate,
    UserAdd,
} from "../../redux/actions/Admin-saasot-action";
import { BACKEND_API_URL } from "../../environment";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import axios from "axios";
import LoadingSpinner from "../../containers/LoadingSpinner";
import { validations } from "../../utils";
const AddClient = () => {
    const { listOf, ID } = useParams()
    const dispatch = useDispatch();
    const url = window.location.href;
    const path = new URL(url).pathname;
    const ids = path.split("/").pop().split(",");

    let navigate = useNavigate();
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [username, setusername] = useState("");

    const [role, setrole] = useState();
    const [email, setemail] = useState("");
    const [company, setCompany] = useState("");
    

    const [companyName, setCompanyName] = useState("");
    const [isTrue, setIsTrue] = useState(false);
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const [passwordshow, setpasswordshow] = useState(false);
    const [rerender, setrender] = useState(false);
    const [isLoadingApi, setIsLoadingApi] = useState(false);
    const [errors, setErrors] = useState({
        email: null,
        password: null,
        firstname: null,
        lastname: null,
        username: null,
        confirmPassword: null,
        role: null,
        company: null,
    });
    const { UserlistIDdata, sucess: updated } = useSelector(
        (state) => state.UserlistIDReducer
    );
   

    const { userData } = useSelector((state) => state.authReducer);

    const { error, success: successAdd, message, loading: isLoading } = useSelector((state) => state.UserPostReducer);


    const { success: updatesuccess } = useSelector(
        (state) => state.UserUpdateReducer
    );

    const {
        success: successfullyupdated,
        AllCompanyName,
    } = useSelector((state) => state.GetAllCompanyNameReducer);
   


    useEffect(() => {
        if (Array.isArray(ids) && ids.length === 1 && !isNaN(ids[0])) {
            dispatch(Userlistid(Number(ids[0]), listOf));
            setpasswordshow(true);
        }
    }, []);


    useEffect(() => {
        if (updatesuccess && rerender) {
            swal({
                title: "Succesfully Edited",
                // className: "successAlert",
                icon: "success",
                buttons: false,
                timer: 3000,
            });

            navigate(`/company-list/${listOf}`);
        }
    }, [updatesuccess, rerender]);

    useEffect(() => {
        if (Array.isArray(ids) && ids.length === 1 && !isNaN(ids[0])) {
            setfirstname(UserlistIDdata?.first_name);
            setlastname(UserlistIDdata?.last_name);
            setrole(listOf);
            setemail(UserlistIDdata?.email);
            setusername(UserlistIDdata?.username);
            setCompany(UserlistIDdata?.company?.id)
            setIsTrue(UserlistIDdata?.is_true)
        }
    }, [UserlistIDdata, listOf]);

    const validateSubmitCompany = (e) => {
        e.preventDefault();
        const tempErrors = {

            company: !companyName && "Enter company name",
        };
        setErrors(tempErrors);
        if (Object.values(tempErrors).filter((value) => value).length) {

            return;
        }
        handleSubmitCompany();
    }

    useEffect(() => {
        if (listOf == "company" && ID) {
            setCompanyName(UserlistIDdata?.name)
        }
    }, [listOf, UserlistIDdata])

    const validateSubmit = (e) => {
        e.preventDefault();
        const tempErrors = {
            email: validations.email(email),
            firstname: validations.firstName(firstname),
            lastname: validations.lastName(lastname),
            username: validations.username(username),
            ...(!Array.isArray(ids) &&
                ids.length === 1 &&
                !isNaN(ids[0]) && {
                password: validations.password(password),
                confirmPassword: validations.confirmPassword(
                    confirmpassword,
                    password
                ),
            }),
            // role: !role && "Enter Role",
            // company: userData?.user?.role === 4 ? !company && "Enter Company" : null,

        };
        setErrors(tempErrors);
        if (Object.values(tempErrors).filter((value) => value).length) {

            return;
        }
        handleSubmit();
    };

    const handleSubmitCompany = async () => {
        try {
            setIsLoadingApi(true)
            if (listOf == "company" && ID) {
                await dispatch(UserUpdate({ name: companyName }, ID, listOf));
                setrender(true);
            } else {

                const success = axios
                    .post(`${BACKEND_API_URL}authentication_id/companies/`, {
                        name: companyName,

                    })
                    .then((res) => {

                        swal({
                            title: "Company Created Successfully ",
                            text: res?.statusText,
                            className: "successAlert",
                            icon: "success",
                            buttons: false,
                            timer: 3000,
                        });
                        setIsLoadingApi(false)
                        navigate(`/company-list/${listOf}`)
                        setrender(true);
                    })
                    .catch((error) => {
                        setIsLoadingApi(false)
                        swal({
                            title: "Error",
                            text: error?.response?.data?.error,
                            className: "errorAlert",
                            icon: "error",
                            buttons: false,
                            timer: 4000,
                        });
                    });
                setrender(true);
            }

        } catch (error) {
            console.error("Error while dispatching:", error);
        }


    };

    const handleSubmit = async () => {
        const formData = {
            confirm_password: confirmpassword,
            email: email,
            first_name: firstname,
            last_name: lastname,
            password: password,
            role: listOf == "superadmin" ? 4 : listOf == "admin" ? 1 : null,
            username: username,
            is_true: isTrue,
            company: company

        }
        try {
            setIsLoadingApi(true)
            if (Array.isArray(ids) && ids.length === 1 && !isNaN(ids[0])) {
                await dispatch(UserUpdate(formData, Number(ids[0])));
                setrender(true);
            } else if (listOf == "admin") {
                await dispatch(UserAdd(formData));

                setrender(true);
            } else {
                const success = axios
                    .post(`${BACKEND_API_URL}auth/signup-company-user/`, {
                        confirm_password: confirmpassword,
                        email: email,
                        first_name: firstname,
                        last_name: lastname,
                        password: password,
                        role: listOf == "superadmin" ? 4 : listOf == "admin" ? 1 : null,
                        username: username,
                        ...(role !== "4" && { company: company }),
                        ...(role === "4" && { is_true: isTrue })
                    })
                    .then((res) => {
                        swal({
                            title: " ",
                            text: res?.data?.message,
                            className: "successAlert",
                            icon: "",
                            buttons: false,
                            timer: 3000,
                        });
                        setIsLoadingApi(false)
                        navigate(`/super-list/${listOf}`);
                        setrender(true);
                    })
                    .catch((error) => {
                        setIsLoadingApi(false)
                        swal({
                            title: " Error",
                            text: error?.response?.data?.message,
                            className: "errorAlert",
                            icon: "",
                            buttons: false,
                            timer: 4000,
                        });
                    });
            }
        } catch (error) {
            console.error("Error while dispatching:", error);
        }


    };


    useEffect(() => {
        if (successAdd && message && rerender) {
            swal({
                title: " ",
                text: message,
                className: "successAlert",
                icon: "",
                buttons: false,
                timer: 3000,
            });

            navigate("/dashboard")
            setrender(false);
            setfirstname(null);
            setlastname(null);
            setrole(null);
            setemail(null);
            setusername(null);
            setCompany(null);
            setIsLoadingApi(false)
        }
        if (error && rerender) {
            swal({
                title: " Error",
                text: error,
                className: "errorAlert",
                icon: "",
                buttons: false,
                timer: 4000,
            });
            setrender(false);

            setIsLoadingApi(false)

        }
    }, [successAdd, error, message, rerender]);
    return (
        <>
            {isLoadingApi ? (
                <LoadingSpinner />
            ) : (
                <>
                    <div className="content">
                        <div className="adduser-div">
                            <div className="userdiv-21">
                                <h1 className="createtitle" style={{  textTransform: "capitalize"}}> {listOf=="company" ? "client": listOf=="admin" ? "clients-users" : listOf }</h1>
                            </div>
                            {listOf == "company" ?

                                <div className="container-add">
                                    <div class="bg-white newuserform">
                                        <div class="grid gap-3 mb-6 md:grid-cols-2">
                                            <div className="addUser">
                                                <div className="userform">
                                                    <label
                                                        htmlFor="first_name"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        Client Name
                                                    </label>
                                                    <div className="contact-input">
                                                        <input
                                                            type="text"
                                                            value={companyName}
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            placeholder="Enter Client Name"
                                                            onChange={(e) => {
                                                                setCompanyName(e.target.value);
                                                                setErrors({ ...errors, company: null });
                                                            }}
                                                        />
                                                        <span
                                                            style={{
                                                                color: "#D14F4F",
                                                                fontSize: "13px",
                                                                opacity: errors.companyName ? 1 : 0,
                                                            }}
                                                        >
                                                            {errors.companyName ?? "valid"}
                                                        </span>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                        <hr className="bottamhr"></hr>
                                        <div>
                                            <button

                                                onClick={validateSubmitCompany}
                                                class="bg-teal-800 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded uploadfilessubmitbutton"
                                                type="submit"
                                            >
                                                Submit
                                            </button>
                                            <Link to={`/company-list/${listOf}`}>
                                                <button class="bg-teal-800 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded uploadfilessubmitbutton">
                                                    Cancel
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="container-add">
                                    <div class="bg-white newuserform">
                                        <div class="grid gap-3 mb-6 md:grid-cols-2">
                                            <div className="addUser">
                                                <div className="userform">
                                                    <label
                                                        htmlFor="first_name"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        Username
                                                    </label>
                                                    <div className="contact-input">
                                                        <input
                                                            type="text"
                                                            value={username}
                                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            placeholder="John"
                                                            onChange={(e) => {
                                                                setusername(e.target.value);
                                                                setErrors({ ...errors, username: null });
                                                            }}
                                                        />
                                                        <span
                                                            style={{
                                                                color: "#D14F4F",
                                                                fontSize: "13px",
                                                                opacity: errors.username ? 1 : 0,
                                                            }}
                                                        >
                                                            {errors.username ?? "valid"}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="userform">
                                                    <label
                                                        for="email"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        Email address
                                                    </label>
                                                    <div className="contact-input">
                                                        <input
                                                            autoComplete="off"
                                                            type="email"
                                                            value={email}
                                                            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            placeholder="john.doe@company.com"
                                                            onChange={(e) => {
                                                                setemail(e.target.value);
                                                                setErrors({ ...errors, email: null });
                                                            }}
                                                            required
                                                        />
                                                        <span
                                                            style={{
                                                                color: "#D14F4F",
                                                                fontSize: "13px",
                                                                opacity: errors.email ? 1 : 0,
                                                            }}
                                                        >
                                                            {errors.email ?? "valid"}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="addUser">
                                                <div className="userform">
                                                    <label
                                                        for="firstname"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        First-Name
                                                    </label>
                                                    <div className="contact-input">
                                                        <input
                                                            type="text"
                                                            value={firstname}
                                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            placeholder="John"
                                                            autoComplete="off"
                                                            onChange={(e) => {
                                                                setfirstname(e.target.value);
                                                                setErrors({ ...errors, firstname: null });
                                                            }}
                                                        // required
                                                        />
                                                        <span
                                                            style={{
                                                                color: "#D14F4F",
                                                                fontSize: "13px",
                                                                opacity: errors.firstname ? 1 : 0,
                                                            }}
                                                        >
                                                            {errors.firstname ?? "valid"}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="userform">
                                                    <label
                                                        for="lastname"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        Last-Name
                                                    </label>
                                                    <div className="contact-input">
                                                        <input
                                                            type="text"
                                                            value={lastname}
                                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            placeholder="John"
                                                            autoComplete="off"
                                                            // required
                                                            onChange={(e) => {
                                                                setlastname(e.target.value);
                                                                setErrors({ ...errors, lastname: null });
                                                            }}
                                                        />
                                                        <span
                                                            style={{
                                                                color: "#D14F4F",
                                                                fontSize: "13px",
                                                                opacity: errors.lastname ? 1 : 0,
                                                            }}
                                                        >
                                                            {errors.lastname ?? "valid"}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            {!passwordshow && (
                                                <>
                                                    <div className="addUser">
                                                        <div className="userform">
                                                            <label
                                                                for="password"
                                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                            >
                                                                password
                                                            </label>
                                                            <div className="contact-input">
                                                                <input
                                                                    type="password"
                                                                    value={password}
                                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                    placeholder="Enter Password"
                                                                    autoComplete="off"
                                                                    // required
                                                                    onChange={(e) => {
                                                                        setpassword(e.target.value);
                                                                        setErrors({ ...errors, password: null });
                                                                    }}
                                                                />
                                                                <span
                                                                    style={{
                                                                        color: "#D14F4F",
                                                                        fontSize: "13px",
                                                                        opacity: errors.password ? 1 : 0,
                                                                    }}
                                                                >
                                                                    {errors.password ?? "valid"}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="userform">
                                                            <label
                                                                for="confirmpassword"
                                                                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                            >
                                                                Confirm password
                                                            </label>
                                                            <div className="contact-input">
                                                                <input
                                                                    type="password"
                                                                    value={confirmpassword}
                                                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                    placeholder="Enter confirm Password"
                                                                    autoComplete="off"
                                                                    // required
                                                                    onChange={(e) => {
                                                                        setconfirmpassword(e.target.value);
                                                                        setErrors({ ...errors, confirmPassword: null });
                                                                    }}
                                                                />
                                                                <span
                                                                    style={{
                                                                        color: "#D14F4F",
                                                                        fontSize: "13px",
                                                                        opacity: errors.confirmPassword ? 1 : 0,
                                                                    }}
                                                                >
                                                                    {errors.confirmPassword ?? "valid"}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                            <div className="addUser">
                                                <div className="userform">
                                                    <label
                                                        for="countries"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        ROLE
                                                    </label>
                                                    <div className="contact-input">
                                                        <input
                                                            type="text"
                                                            disabled
                                                            value={listOf}
                                                            // onChange={(e) => {
                                                            //     setCompany(e.target.value);

                                                            // }}
                                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            placeholder="John"
                                                            autoComplete="off"
                                                        />
                                                        {/* <select
                                                     value={role}
                                                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                     onChange={(e) => {
                                                         setrole(e.target.value);
                                                         setErrors({ ...errors, role: null });
                                                     }}
                                                 >
                                                     <option>Choose a Role</option>

                                                     <option value="4">Super Admin </option>
                                                     <option value="1">Client </option>
                                                 </select> */}
                                                        <span
                                                            style={{
                                                                color: "#D14F4F",
                                                                fontSize: "13px",
                                                                opacity: errors.role ? 1 : 0,
                                                            }}
                                                        >
                                                            {errors.role ?? "valid"}
                                                        </span>
                                                    </div>
                                                </div>
                                                {listOf == "admin" ? <div className="userform">
                                                    <label
                                                        for="lastname"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        Client 
                                                    </label>
                                                    <div className="contact-input">
                                                        {/* <input
                                                            type="text"
                                                            value={company}
                                                            onChange={(e) => {
                                                                setCompany(e.target.value);

                                                            }}
                                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                            placeholder="John"
                                                            autoComplete="off"
                                                        /> */}
                                                        <select className="form-select" aria-label="Default select example" value={company} onChange={(e) => setCompany(e.target.value)}>
                                                            <option value="">Please select a company</option>
                                                            {AllCompanyName?.length > 0 && AllCompanyName.map((company) => (
                                                                <option value={company.id} key={company.id}>{company.name}</option>
                                                            ))}
                                                        </select>

                                                    </div>
                                                </div> : <div className="userform">
                                                    <label
                                                        for="lastname"
                                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        Permissions
                                                    </label>
                                                    <label
                                                        for="role4"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                        style={{ width: "90%" }}
                                                    >
                                                        <input
                                                            type="checkbox"
                                                            id="role4"
                                                            checked={isTrue}
                                                            className="mr-2"
                                                            onChange={(e) => {
                                                                setIsTrue(!isTrue);
                                                            }}
                                                        />
                                                        The super admin possesses access to all admin actions, enabling them to delete or update anything within the company.
                                                    </label>
                                                </div>}

                                            </div>
                                        </div>
                                        <hr className="bottamhr"></hr>
                                        <div>
                                            <button

                                                onClick={validateSubmit}
                                                class="bg-teal-800 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded uploadfilessubmitbutton"
                                                type="submit"
                                            >
                                                Submit
                                            </button>
                                            <Link to={`/super-list/${listOf}`}>
                                                <button class="bg-teal-800 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded uploadfilessubmitbutton">
                                                    Cancel
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default AddClient;
